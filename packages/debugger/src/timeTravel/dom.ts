import config from "../config";
import * as State from "../state";
import * as Core from "./core";
import { regConstructor, regOpaqueObject } from "@effectful/serialization";
import { nodeListIter } from "@effectful/serialization/dom";
import { Operation } from "../state";
import { record1 } from "./binds";

const journal = State.journal;

const domObserverSymbol = Symbol("@effectful/debugger/dom");

/** currently observed elements */
let observing = new Set<ElementExt>();

interface ObserverData {
  root: Element;
  observer?: MutationObserver;
}

interface ElementExt extends Element {
  [domObserverSymbol]?: ObserverData;
}

/*
 * avoiding snapshot recording for runtime setters,
 * we'll get the  normalizedresults from the mutation observer
 */
if (typeof Node !== "undefined") {
  for (const i of [Node, NodeList]) {
    if (!config.expNoAccessOverloading) {
      Core.objectSaved.defineProperty(i.prototype, Core.SetSymbol, {
        configurable: true,
        value(node: any, name: any, value: any) {
          if (journal.enabled) {
            const proto = Object.getPrototypeOf(node);
            if (!(name in proto)) Core.recordProp(node, name);
          }
          return (node[name] = value);
        }
      });
      Core.objectSaved.defineProperty(i.prototype, Core.DeleteSymbol, {
        configurable: true,
        value: Core.noOrderDelete
      });
    }
    Core.objectSaved.defineProperty(i.prototype, Core.KeysMapSymbol, {
      configurable: true,
      value: false
    });
  }
}

export class DomSnapshot implements Operation {
  changes: MutationRecord[];
  constructor(changes: MutationRecord[]) {
    this.changes = changes;
  }
  call() {
    const { changes } = this;
    for (let i = changes.length - 1; i >= 0; --i) {
      const rec = changes[i];
      switch (rec.type) {
        case "childList":
          for (const node of nodeListIter(rec.addedNodes)) {
            const parent = node.parentNode;
            if (parent) parent.removeChild(node);
          }
          for (const node of nodeListIter(rec.removedNodes))
            rec.target.insertBefore(node, rec.nextSibling);
          break;
        case "attributes":
          (<Element>rec.target).setAttribute(
            <string>rec.attributeName,
            <string>rec.oldValue
          );
          break;
        case "characterData":
          (<CharacterData>rec.target).data = <string>rec.oldValue;
          break;
      }
    }
  }
}

regConstructor(DomSnapshot, {
  // TODO: check how to make jsdom to run on same context, so this is not needed
  write(ctx, value) {
    const res = <any>{};
    res.i = ctx.step([...value.changes], res, "i");
    res.p = ctx.step((<any>value).prev, res, "p");
    return res;
  },
  create() {
    return new DomSnapshot([]);
  },
  readContent(ctx, json, value) {
    value.changes.push(...ctx.step((<any>json).i));
    (<any>value).prev = ctx.step((<any>json).p);
  },
  props: false
});

function restoreDom(this: any) {
  this.a.call();
}

regOpaqueObject(restoreDom, "#dom");

function record(changes: MutationRecord[]) {
  if (journal.enabled && !changes.length) return;
  record1(restoreDom, new DomSnapshot(changes));
}

function flushData(data: ObserverData) {
  if (data.observer) {
    const changes = data.observer.takeRecords();
    if (changes.length && journal.now) record(changes);
  }
}

export function flush() {
  for (const root of observing) {
    const data = root[domObserverSymbol];
    if (data) flushData(data);
  }
}

/**
 * This enables tracking DOM using MutationObserver.
 */
export function track(rootEl: Element) {
  const root = <ElementExt>rootEl;
  let data = root[domObserverSymbol];
  observing.add(root);
  if (!data) data = root[domObserverSymbol] = { root };
  if (!data.observer) {
    const observer = (data.observer = new MutationObserver(changes => {
      if (journal.now && changes.length) record(changes);
    }));
    observer.observe(data.root, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true
    });
  }
}

/**
 * This disables tracking DOM using MutationObserver.
 */
export function untrack(rootEl: Element) {
  const root = <ElementExt>rootEl;
  let data = root[domObserverSymbol];
  if (data && data.observer) {
    flush();
    data.observer.disconnect();
    data.observer = void 0;
  }
  observing.delete(root);
}
