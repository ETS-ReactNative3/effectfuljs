var $M = require("@effectful/debugger"),
    $context = $M.context,
    $ret = $M.ret,
    $retA = $M.retA,
    $retG = $M.retG,
    $unhandled = $M.unhandled,
    $unhandledA = $M.unhandledA,
    $unhandledG = $M.unhandledG,
    $brk = $M.brk,
    $lset = $M.lset,
    $mcall = $M.mcall,
    $set = $M.set,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  _defineProperties: [1, null],
  _createClass: [2, null],
  _require: [3, null],
  mod: [4, "1:8-1:11"],
  C: [5, "3:9-3:10"],
  Cl: [6, "12:6-12:8"],
  obj1: [7, "30:6-30:10"]
}, null, 0],
    $s$2 = [{
  target: [1, null],
  props: [2, null],
  i: [3, null],
  descriptor: [4, null]
}, $s$1, 1],
    $s$3 = [{}, $s$2, 2],
    $s$4 = [{
  Constructor: [1, null],
  protoProps: [2, null],
  staticProps: [3, null]
}, $s$1, 1],
    $s$5 = [{
  a: [1, "3:11-3:12"]
}, $s$1, 1],
    $s$6 = [{
  e: [2, "7:11-7:12"]
}, $s$5, 1],
    $s$7 = [{
  Cl: [1, null],
  _proto: [2, null]
}, $s$1, 1],
    $s$8 = [{}, $s$7, 2],
    $s$9 = [{}, $s$7, 2],
    $s$10 = [{}, $s$7, 2],
    $s$11 = [{}, $s$10, 3],
    $s$12 = [{}, $s$7, 2],
    $s$13 = [{
  value: [1, "19:12-19:17"]
}, $s$7, 2],
    $s$14 = [{
  a: [1, "31:8-31:9"]
}, $s$1, 1],
    $s$15 = [{}, $s$1, 1],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 8, "1:0-39:0", 32, function file_js($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $lset($l, 1,
      /*_defineProperties*/
      $m$1($));
      $lset($l, 2,
      /*_createClass*/
      $m$2($));
      $lset($l, 5,
      /*C*/
      $m$3($));
      $.goto = 1;
      $brk("1:8-1:30");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.moduleId = require.resolve("mod"), $M.force(require("mod")));
      $.state = 2;

    case 2:
      $lset($l, 3,
      /*_require*/
      $p);
      $lset($l, 4,
      /*mod*/
      $l[3].mod);
      $.goto = 3;
      $brk("12:6-27:12");
      $.state = 3;

    case 3:
      $.goto = 4;
      $p = /*#__PURE__*/($context.call = $m$4($))();
      $.state = 4;

    case 4:
      $lset($l, 6,
      /*Cl*/
      $p);
      $.goto = 5;
      $brk("30:0-34:2");
      $.state = 5;

    case 5:
      $lset($l, 7,
      /*obj1*/
      {
        objFn: $m$11($)
      });
      $.goto = 6;
      $brk("36:0-38:2");
      $.state = 6;

    case 6:
      $set(module.exports, "fn2", $m$12($));
      $.goto = 8;
      continue;

    case 7:
      $.goto = 8;
      return $unhandled($.error);

    case 8:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[4, "1:8-1:30", $s$1], [2, "1:16-1:30", $s$1], [4, "12:6-27:12", $s$1], [2, null, $s$1], [4, "30:0-34:2", $s$1], [4, "36:0-38:2", $s$1], [0, "36:0-38:1", $s$1], [16, "39:0-39:0", $s$1], [16, "39:0-39:0", $s$1]]),
    $m$1 = $M.fun("m$1", "_defineProperties", null, $m$0, ["target", "props"], 1, 6, null, 0, function _defineProperties($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $l = $.$ = [$l];
      $.state = 1;

    case 1:
      $lset($l[0], 3,
      /*i*/
      0);
      $.state = 2;

    case 2:
      if ($l[0][3] < $l[0][2].length) {
        $.state = 3;
      } else {
        $.goto = 9;
        continue;
      }

    case 3:
      $lset($l[0], 4,
      /*descriptor*/
      $l[0][2][$l[0][3]]);
      $1 = $l[0][4].enumerable;

      if ($1) {
        $.state = 4;
      } else {
        $.goto = 8;
        continue;
      }

    case 4:
      $set($l[0][4], "enumerable", $1);
      $set($l[0][4], "configurable", true);

      if ("value" in $l[0][4]) {
        $.state = 5;
      } else {
        $.goto = 6;
        continue;
      }

    case 5:
      $set($l[0][4], "writable", true);
      $.state = 6;

    case 6:
      $.goto = 7;
      $mcall("defineProperty", Object, $l[0][1], $l[0][4].key, $l[0][4]);
      $.state = 7;

    case 7:
      $l = $.$ = $l.slice();
      $lset($l[0], 3,
      /*i*/
      $l[0][3] + 1);
      $.goto = 2;
      continue;

    case 8:
      $1 = false;
      $.goto = 4;
      continue;

    case 9:
      $l[0][5] = 11;
      $.state = 10;

    case 10:
      $l = $.$ = $l[0];
      $.goto = $l[5];
      continue;

    case 11:
      $.goto = 13;
      continue;

    case 12:
      $.goto = 13;
      return $unhandled($.error);

    case 13:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      $l[0][5] = 12;
      $.goto = 10;
      break;

    default:
      $.goto = 12;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      $l[0][5] = 13;
      $.goto = 10;
      break;

    default:
      $.goto = 13;
      break;
  }
}, 1, [[0, null, $s$2], [1, null, $s$3], [1, null, $s$2], [1, null, $s$3], [1, null, $s$3], [1, null, $s$3], [3, null, $s$3], [1, null, $s$2], [1, null, $s$2], [1, null, $s$2], [0, null, $s$2], [0, null, $s$2], [16, null, $s$2], [16, null, $s$2]]),
    $m$2 = $M.fun("m$2", "_createClass", null, $m$0, ["Constructor", "protoProps", "staticProps"], 0, 4, null, 0, function _createClass($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      if ($l[2]) {
        $.state = 1;
      } else {
        $.goto = 2;
        continue;
      }

    case 1:
      $.goto = 2;
      ($context.call = $l[0][1])($l[1].prototype, $l[2]);
      $.state = 2;

    case 2:
      if ($l[3]) {
        $.state = 3;
      } else {
        $.goto = 4;
        continue;
      }

    case 3:
      $.goto = 4;
      ($context.call = $l[0][1])($l[1], $l[3]);
      $.state = 4;

    case 4:
      $.result = $l[1];
      $.goto = 6;
      continue;

    case 5:
      $.goto = 6;
      return $unhandled($.error);

    case 6:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [16, null, $s$4], [16, null, $s$4]]),
    $m$3 = $M.fun("m$3", "C", null, $m$0, ["a"], 0, 3, "3:0-10:1", 0, function C($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("4:2-9:3");
      $.state = 1;

    case 1:
      $.goto = 2;
      $brk("5:4-5:26");
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = $mcall("fn1", $l[0][4], $l[1]);
      $.state = 3;

    case 3:
      $.goto = 4;
      $mcall("proc1", $l[0][4], $p);
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk("6:4-6:16");
      $.state = 5;

    case 5:
      $.goto = 6;
      $mcall("proc2", $l[0][4]);
      $.state = 6;

    case 6:
      $.goto = 10;
      continue;

    case 7:
      $lset($l, 2,
      /*e*/
      $.error);
      $.error = void 0;
      $.goto = 8;
      $brk("8:4-8:17");
      $.state = 8;

    case 8:
      $.goto = 6;
      $mcall("proc3", $l[0][4], $l[2]);
      continue;

    case 9:
      $.goto = 10;
      return $unhandled($.error);

    case 10:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      $.goto = 7;
      break;

    default:
      $.goto = 9;
      break;
  }
}, null, 1, [[4, "4:2-9:3", $s$5], [5, "5:4-5:26", $s$5], [3, "5:14-5:24", $s$5], [3, "5:4-5:25", $s$5], [5, "6:4-6:16", $s$5], [3, "6:4-6:15", $s$5], [0, null, $s$5], [4, "8:4-8:17", $s$6], [2, "8:4-8:16", $s$6], [16, "10:1-10:1", $s$5], [16, "10:1-10:1", $s$5]]),
    $m$4 = $M.fun("m$4", null, null, $m$0, [], 0, 3, null, 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $lset($l, 1,
      /*Cl*/
      $m$5($));
      $lset($l, 2,
      /*_proto*/
      $l[1].prototype);
      $.goto = 1;
      $brk("22:2-24:12");
      $.state = 1;

    case 1:
      $set($l[2], "func", $m$6($));
      $.goto = 2;
      $brk("25:2-27:7");
      $.state = 2;

    case 2:
      $set($l[2], "func", $m$7($));
      $.goto = 3;
      $brk("16:14-21:17");
      $.state = 3;

    case 3:
      $.goto = 4;
      ($context.call = $l[0][2])($l[1], [{
        key: "prop1",
        get: $m$9($),
        set: $m$10($)
      }]);
      $.state = 4;

    case 4:
      $.result = $l[1];
      $.goto = 6;
      continue;

    case 5:
      $.goto = 6;
      return $unhandled($.error);

    case 6:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "22:2-24:12", $s$7], [4, "25:2-27:7", $s$7], [4, "16:14-21:17", $s$7], [2, null, $s$7], [0, null, $s$7], [16, null, $s$7], [16, null, $s$7]]),
    $m$5 = $M.fun("m$5", "Cl", null, $m$4, [], 0, 1, "13:2-15:3", 0, function Cl($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("14:4-14:17");
      $.state = 1;

    case 1:
      $.goto = 3;
      ($context.call = not_traced)();
      continue;

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "14:4-14:17", $s$8], [2, "14:4-14:16", $s$8], [16, "15:3-15:3", $s$8], [16, "15:3-15:3", $s$8]]),
    $m$6 = $M.fun("m$6", "func", null, $m$4, [], 0, 1, "22:2-24:3", 1, function func($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("23:4-23:17");
      $.state = 1;

    case 1:
      $.goto = 3;
      ($context.call = not_traced)();
      continue;

    case 2:
      $.goto = 3;
      return $unhandledA($.error);

    case 3:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "23:4-23:17", $s$9], [2, "23:4-23:16", $s$9], [16, "24:3-24:3", $s$9], [16, "24:3-24:3", $s$9]]),
    $m$7 = $M.fun("m$7", "func", null, $m$4, [], 0, 1, "25:2-27:3", 2, function func($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("26:4-26:44");
      $.state = 1;

    case 1:
      $.goto = 3;
      ($context.call = not_traced)($m$8($));
      continue;

    case 2:
      $.goto = 3;
      return $unhandledG($.error);

    case 3:
      return $retG($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "26:4-26:44", $s$10], [2, "26:4-26:43", $s$10], [16, "27:3-27:3", $s$10], [16, "27:3-27:3", $s$10]]),
    $m$8 = $M.fun("m$8", null, null, $m$7, [], 0, 2, "26:15-26:42", 4, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("26:21-26:42");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = traced)(1);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $p = ($context.call = traced)(2);
      $.state = 3;

    case 3:
      $.result = $l[1] + $p;
      $.goto = 5;
      continue;

    case 4:
      $.goto = 5;
      return $unhandled($.error);

    case 5:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[4, "26:21-26:42", $s$11], [2, "26:21-26:30", $s$11], [2, "26:33-26:42", $s$11], [0, "26:21-26:42", $s$11], [16, "26:42-26:42", $s$11], [16, "26:42-26:42", $s$11]]),
    $m$9 = $M.fun("m$9", null, null, $m$4, [], 0, 1, null, 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("17:4-17:17");
      $.state = 1;

    case 1:
      $.goto = 3;
      ($context.call = not_traced)();
      continue;

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "17:4-17:17", $s$12], [2, "17:4-17:16", $s$12], [16, null, $s$12], [16, null, $s$12]]),
    $m$10 = $M.fun("m$10", null, null, $m$4, ["value"], 0, 2, null, 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("20:4-20:17");
      $.state = 1;

    case 1:
      $.goto = 3;
      ($context.call = not_traced)();
      continue;

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "20:4-20:17", $s$13], [2, "20:4-20:16", $s$13], [16, null, $s$13], [16, null, $s$13]]),
    $m$11 = $M.fun("m$11", null, null, $m$0, ["a"], 0, 2, null, 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("32:4-32:19");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = new ($context.call = $l[0][6])();
      $.state = 2;

    case 2:
      $.goto = 4;
      $mcall("fn", $p, $l[1]);
      continue;

    case 3:
      $.goto = 4;
      return $unhandled($.error);

    case 4:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "32:4-32:19", $s$14], [2, "32:4-32:12", $s$14], [2, "32:4-32:18", $s$14], [16, null, $s$14], [16, null, $s$14]]),
    $m$12 = $M.fun("m$12", "fn1", null, $m$0, [], 0, 2, "36:14-38:1", 0, function fn1($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("37:2-37:49");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = $mcall("f2", $l[0][4]);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $p = new ($context.call = $l[0][5])();
      $.state = 3;

    case 3:
      $.goto = 4;
      $p = $mcall("some", $l[0][4], {
        a: $l[1],
        b: [$p]
      });
      $.state = 4;

    case 4:
      $.result = $p;
      $.goto = 6;
      continue;

    case 5:
      $.goto = 6;
      return $unhandled($.error);

    case 6:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "37:2-37:49", $s$15], [2, "37:23-37:31", $s$15], [2, "37:37-37:44", $s$15], [2, "37:9-37:48", $s$15], [0, null, $s$15], [16, "38:1-38:1", $s$15], [16, "38:1-38:1", $s$15]]);

$M.moduleExports();