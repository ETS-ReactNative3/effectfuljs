import defaults from "./config"
import generate from "babel-generator"
import {parse} from "babylon"
import {produce,consume,kit} from "estransducers"
import * as Kit from "./kit"
// import * as fs from "fs"
import * as R from "ramda"
import * as path from "path"
import * as T from "./transform"
import * as Policy from "./policy"
import {sync as findup} from "findup"

const CONFIG_NAME = "effectfuljs-config.json"

export const tok = Kit.tok, configDiff = Policy.configDiff,
  profile = Policy.profile, defaultGensTransform = T.defaultGensTransform,
  injectFuncOpts = T.injectFuncOpts, injectOpts = T.injectOpts

function convOptions(v, fn) {
  var f
  if (v == null || v === true)
    v = {}
  else {
    v = Object.assign({},v,{override:v})
  }
  if (v.substr != null)
    v = {profile: v}
  v = Object.assign({}, defaults, v)
  if (fn == null) 
    fn = v.filename
  if (fn != null) {
    v.parser.source = v.filename = fn
    try {
      f = findup.sync(path.dirname(fn), CONFIG_NAME)
      if (defaults.versbose)
        console.log(`using config ${f}`)
    } catch (error) {
      if (defaults.verbose)
        console.log(`looking for ${CONFIG_NAME} failed: ${error}`)
    }
    if (f != null)
      Object.assign(v, require(path.join(f, CONFIG_NAME)))
  }
  return v
}

export function transform(ast, opts) {
  return T.main(ast,convOptions(opts))
}

export default transform

export function babelPreset(opts) {
  opts = convOptions(opts)
  return T.babelPreset(opts)
}
