/**
 * ES async, generator, async generator functions implementation with
 * access to their current state
 */

import * as Es from "@effectful/es-rt/opts/defunct"

/** a property name for accessing threads store */
export var contextSymbol = Symbol("@effectful/es-persist/context")

/** 
 * a name of a method like `Promise.prototype.then`, but instead of two 
 * callbacks it takes an object with `resume`/`reject` methods, thus
 * making it easier to serialize 
 */
export var chainSymbol = Symbol("@effectful/es-persist/chain")

/** 
 * same as `chainSymbol` but the method doesn't return next async value,
 * just subscribes to `this` settlement events
 */
export var awaitSymbol = Symbol("@effectful/es-persist/await")

export var generator = Es.generator
export var generatorFunction = Es.generatorFunction

export var async = Es.async
export var iterator = Es.iterator
export var iteratorM = Es.iteratorM
export var forInIterator = Es.forInIterator

/** global registry of currently running async functions */
function Context() {
  this.threads = new Set()
}

/** 
 * called for each async function once, at its module's top level
 */
Context.prototype.reg = function(fun) {}

/**
 * called on each async function execution
 */
Context.prototype.startThread = function startThread(thread) {
  this.threads.add(thread)
}

/**
 * called on each asyn function exit
 */
Context.prototype.exitThread = function exitThread(thread) {
  this.threads.delete(thread)
  thread.$handle = thread.$step = thread.$exit
    = thread.$contHandle = thread.$contExit = 0
}

/** default registry */
var globalContext = new Context()

var contextStack = []

/** 
 * gets current context or replace it with some new one if an argument is provided
 */
export function context(ctx) {
  if (ctx)
    globalContext = ctx
  return globalContext
}

export var AsyncState = {
  pending: 0,
  resolved: 1,
  rejected: 2
}

export function Async() {
  this[contextSymbol].startThread(this)
  this.dest = []
  this.state = AsyncState.pending
  this.value = void 0
}

var EsAp = Es.Async.prototype
var Ap = Async.prototype = Object.create(EsAp)
Ap.constructor = Async

function AsyncGenerator() {
  this[contextSymbol].startThread(this)
  this.queue = []
}

export function asyncGenerator(caller) {
  var res = Object.create(caller.prototype)
  caller.prototype.constructor.call(res)
  return res
}

var EsAGp = Es.AsyncGenerator.prototype.leanPrototype
var AGp = AsyncGenerator.prototype = Object.create(EsAGp)
AGp.constructor = AsyncGenerator

function Residual() {
  this.dest = []
  this.state = AsyncState.pending
}

var Rp = Residual.prototype

Promise.prototype[chainSymbol] = Rp[chainSymbol] = function chain(t) {
  var res = new Residual()
  t.cont = res
  this[awaitSymbol](t)
  return res
}

function Generator() {}
var Gp = Generator.prototype = Object.create(Es.Generator.prototype)
Gp.constructor = Generator

Rp.resume = function(value) {
  var dest = this.dest, i
  this.state = AsyncState.resolved
  this.value = value
  while((i = dest.pop()))
    i.resume(value)
}

Rp.reject = function (e) {
  var dest = this.dest, i
  this.state = AsyncState.rejected
  this.value = e
  while((i = dest.pop()))
    i.reject(e)
}

Rp.then = function(next, err) {
  return this.toPromise().then(next,err)
}

Rp.toPromise = function() {
  var ctx = this
  switch(this.state) {
  case AsyncState.resolved:
    return Promise.resolve(this.value)
  case AsyncState.rejected:
    return Promise.reject(this.value)
  default:
    return new Promise(function(r,e) {
      ctx.dest.push({resume:r,reject:e,debFrom:(new Error()).stack})
    })
  }
}
  
Rp[awaitSymbol] = function(next) {
  switch(this.state) {
  case AsyncState.resolved:
    next.resume(this.value)
    break
  case AsyncState.rejected:
    next.reject(this.value)
    break
  default:
    this.dest.push(next)
  }
}

function trampoline(res) {
  var value
  while(res)
    res = res.$run(res.$step,(value = res.value,res.value = void 0,value))
}

Promise.prototype[awaitSymbol] = function(next) {
  this.then(function(v) { next.resume(v) },function(e) { next.reject(e) })
}

AGp.jump = Ap.jump = function(v, cont, handle, exit) {
  this.$step = cont
  this.$handle = handle
  this.$exit = exit
  this.value = v
  return this
}

AGp.scope = function(step,handle,exit) {
  this.$step = step
  this.$handle = this.$contHandle = handle
  this.$exit = this.$contExit = exit
  return this
}

AGp.chain = Ap.chain = function(v, cont, handle, exit) {
  this.$step = cont
  this.$handle = handle
  this.$exit = exit
  if (!v[awaitSymbol]) {
    this.value = v
    return this // tail call
  }
  return v[awaitSymbol](this)
}

Ap.scope = function(cont, handle, exit) {
  this.$step = cont
  this.$handle = handle
  this.$exit = exit
  this.cont = new Residual()
  trampoline(this.$run(cont))
  return this.cont
}

Ap.pure = function(value) {
  this[contextSymbol].exitThread(this)
  this.cont.resume(value)
}

Ap.raise = function(error) {
  this[contextSymbol].exitThread(this)
  this.cont.reject(error)
}

AGp.pure = function(result) {
  this[contextSymbol].exitThread(this)
  this.queue.shift().resume({value:result,done:true})
}

AGp.raise = function(error) {
  this[contextSymbol].exitThread(this)
  this.queue.shift().reject(error)
}

AGp.resume = Ap.resume = function resume(v) {
  try {
    trampoline(this.$run(this.$step, v))
  } catch(e) {
    this.reject(e)
  }
}

AGp.yld = function(value, step, handle, exit) {
  var ctx = this[contextSymbol]
  this.$step = step
  this.$contHandle = handle
  this.$contExit = exit
  return this.queue.shift().resume({value:value,done:false})
}

AGp.return = function(value) {
  var res = new Residual(this)
  this.queue.push(res)
  if (this.$step === 2) {
    this.$resume = this.$exit
    trampoline(this.chain(this.$sub.return(value),
                          3,this.$handle,this.$exit))
  } else {
    this.$step = this.$exit
    this.resume(value)
  }
  return res
}

AGp.reject = Ap.reject = function(e) {
  if (this.$handle) {
    this.$step = this.$handle
    this.$handle = void 0
    this.resume(e)
  } else
    this.raise(e)
}

AGp.throw = function(value) {
  var res = new Residual(this)
  this.queue.push(res)
  if (this.$step === 2) {
    trampoline(this.chain(this.$sub.throw(value),
                          3,this.$handle,this.$exit))
  } else if (this.$handle)  {
    this.$step = this.$handle
    this.resume(value)
  } else {
    this.raise(value)
  }
  return res
}

AGp.next = function next(value) {
  var res = new Residual(this)
  this.queue.push(res)
  this.$handle = this.$contHandle
  this.$exit = this.$contExit
  this.resume(value)
  return res
}

function ext(proto) {
  return function(fun, handler) {
    fun.prototype = Object.create(proto)
    if (!fun.prototype[contextSymbol])
      fun.prototype[contextSymbol] = globalContext
    fun.prototype.$run = handler
    fun.prototype.name = fun.name
    fun.prototype[contextSymbol].reg(fun)
    return fun
  }
}

export const asyncFunction = ext(Ap)
export const asyncGeneratorFunction = ext(AGp)

function All(arr) {
  var len = arr.length, i
  this.dest = []
  this.state = len === 0 ? AsyncState.resolved : AsyncState.pending
  this.value = new Array(len)
  this.countdown = len
  for(i=0;i<len;++i)
    arr[i][awaitSymbol](new AllCont(this,i))
}

/** like `Promise.all` */
export function all(iterable) {
  return new All(Array.from(iterable))
}

var AllProto = All.prototype = Object.create(Rp)
AllProto.constructor = All

function AllCont(src,index) {
  this.src = src
  this.index = index
}

AllCont.prototype.resume = function(value) {
  var src = this.src
  if (src.state !== AsyncState.rejected) {
    src.value[this.index] = value
    if (--src.countdown === 0)
      src.resume(src.value)
  }
}

AllCont.prototype.reject = function(value) {
  this.src.reject(value)
}

function Any(arr) {
  var len = arr.length, i
  this.dest = []
  this.state = AsyncState.pending
  for(i=0;i<len;++i)
    arr[i][awaitSymbol](new AnyCont(this))
}

/** like `Promise.race` */
export function any(iterable) {
  return new Any(Array.from(iterable))
}

function AnyCont(src) {
  this.src = src
}

AnyCont.prototype.resume = function(value) {
  var src = this.src
  if (src.state === AsyncState.pending)
    src.resume(value)
}

AnyCont.prototype.reject = function(value) {
  var src = this.src
  if (src.state === AsyncState.pending)
    src.reject(value)
}

var AnyProto = Any.prototype = Object.create(Rp)
AnyProto.constructor = Any
