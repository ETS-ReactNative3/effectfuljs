var $M = require("@effectful/debugger"),
    $awt = $M.awt,
    $x = $M.context,
    $ret = $M.ret,
    $retA = $M.retA,
    $unhandled = $M.unhandled,
    $unhandledA = $M.unhandledA,
    $mcall = $M.mcall,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  _inheritsLoose: [1, null],
  _setPrototypeOf: [2, null],
  aa: [3, "3:15-3:17"]
}, null, 0],
    $s$2 = [{
  subClass: [1, null],
  superClass: [2, null]
}, $s$1, 1],
    $s$3 = [{
  o: [1, null],
  p: [2, null]
}, $s$1, 1],
    $s$4 = [{
  o: [1, null],
  p: [2, null]
}, $s$3, 2],
    $s$5 = [{
  A: [1, "4:8-4:9"],
  B: [2, "13:8-13:9"]
}, $s$1, 1],
    $s$6 = [{
  A: [1, null],
  _proto: [2, null]
}, $s$5, 2],
    $s$7 = [{}, $s$6, 3],
    $s$8 = [{}, $s$6, 3],
    $s$9 = [{}, $s$6, 3],
    $s$10 = [{
  _A: [1, null],
  B: [2, null],
  _proto2: [3, null]
}, $s$5, 2],
    $s$11 = [{}, $s$10, 3],
    $s$12 = [{}, $s$10, 3],
    $s$13 = [{}, $s$10, 3],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 4, "1:0-22:0", 160, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$1($);
      $l[2] = $m$2($);
      $l[3] = $m$4($);
      $.goto = 2;
      $mcall("profile", M, "es");
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[2, "1:0-1:15", $s$1], [16, "22:0-22:0", $s$1], [16, "22:0-22:0", $s$1]]),
    $m$1 = $M.fun("m$1", "_inheritsLoose", null, $m$0, ["subClass", "superClass"], 0, 3, null, 128, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = $mcall("create", Object, $l[2].prototype);
      $.state = 1;

    case 1:
      $l[1].prototype = $p;
      $l[1].prototype.constructor = $l[1];
      $.goto = 3;
      ($x.call = $l[0][2])($l[1], $l[2]);
      continue;

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$2], [2, null, $s$2], [16, null, $s$2], [16, null, $s$2]]),
    $m$2 = $M.fun("m$2", "_setPrototypeOf", null, $m$0, ["o", "p"], 1, 3, null, 128, function ($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $1 = Object.setPrototypeOf;

      if ($1) {
        $.state = 1;
      } else {
        $1 = $m$3($);
        $.state = 1;
      }

    case 1:
      $l[0][2] = $1;
      $.goto = 2;
      $p = ($x.call = $l[0][2])($l[1], $l[2]);
      $.state = 2;

    case 2:
      $.result = $p;
      $.goto = 4;
      continue;

    case 3:
      $.goto = 4;
      return $unhandled($.error);

    case 4:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$3], [2, null, $s$3], [0, null, $s$3], [16, null, $s$3], [16, null, $s$3]]),
    $m$3 = $M.fun("m$3", "_setPrototypeOf", null, $m$2, ["o", "p"], 0, 3, null, 128, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1].__proto__ = $l[2];
      $.result = $l[1];
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[0, null, $s$4], [16, null, $s$4], [16, null, $s$4]]),
    $m$4 = $M.fun("m$4", "aa", null, $m$0, [], 0, 3, "3:0-21:1", 129, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = /*#__PURE__*/($x.call = $m$5($))();
      $.state = 1;

    case 1:
      $l[1] = $p;
      $.goto = 2;
      $p = /*#__PURE__*/($x.call = $m$9($))($l[1]);
      $.state = 2;

    case 2:
      $l[2] = $p;
      $.goto = 4;
      continue;

    case 3:
      $.goto = 4;
      return $unhandledA($.error);

    case 4:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$5], [2, null, $s$5], [0, null, $s$5], [16, "21:1-21:1", $s$5], [16, "21:1-21:1", $s$5]]),
    $m$5 = $M.fun("m$5", null, null, $m$4, [], 0, 3, "5:4-10:24", 128, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$6($);
      $l[2] = $l[1].prototype;
      $l[2].method = $m$7($);
      $l[1].smethod = $m$8($);
      $.result = $l[1];
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[0, null, $s$6], [16, "10:24-10:24", $s$6], [16, "10:24-10:24", $s$6]]),
    $m$6 = $M.fun("m$6", "A", null, $m$5, [], 0, 1, null, 128, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[0, null, $s$7], [16, null, $s$7], [16, null, $s$7]]),
    $m$7 = $M.fun("m$7", "method", null, $m$5, [], 0, 1, "5:4-7:5", 129, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.result = "from A";
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandledA($.error);

    case 2:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[0, "6:13-6:21", $s$8], [16, "7:5-7:5", $s$8], [16, "7:5-7:5", $s$8]]),
    $m$8 = $M.fun("m$8", "smethod", null, $m$5, [], 0, 1, "8:4-10:5", 129, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.result = "static from A";
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandledA($.error);

    case 2:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[0, "9:13-9:28", $s$9], [16, "10:5-10:5", $s$9], [16, "10:5-10:5", $s$9]]),
    $m$9 = $M.fun("m$9", null, null, $m$4, ["_A"], 0, 4, "14:4-19:24", 128, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[2] = $m$10($);
      $.goto = 1;
      ($x.call = $l[0][0][1])($l[2], $l[1]);
      $.state = 1;

    case 1:
      $l[3] = $l[2].prototype;
      $l[3].method = $m$11($);
      $l[2].smethod = $m$12($);
      $.result = $l[2];
      $.goto = 3;
      continue;

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[2, null, $s$10], [0, null, $s$10], [16, "19:24-19:24", $s$10], [16, "19:24-19:24", $s$10]]),
    $m$10 = $M.fun("m$10", "B", null, $m$9, [], 0, 1, null, 152, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = $mcall("apply", $l[0][1], $.self, $.args);
      $.state = 1;

    case 1:
      $.result = $p;

      if ($.result) {
        $.state = 2;
      } else {
        $.result = $.self;
        $.state = 2;
      }

    case 2:
      $.goto = 4;
      continue;

    case 3:
      $.goto = 4;
      return $unhandled($.error);

    case 4:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[2, null, $s$11], [0, null, $s$11], [0, null, $s$11], [16, null, $s$11], [16, null, $s$11]]),
    $m$11 = $M.fun("m$11", "method", null, $m$9, [], 0, 1, "14:4-16:5", 137, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = $mcall("call", $l[0][1].prototype.method, $.self);
      $.state = 1;

    case 1:
      $.goto = 2;
      return $awt($p);

    case 2:
      $.result = "from B " + $p;
      $.goto = 4;
      continue;

    case 3:
      $.goto = 4;
      return $unhandledA($.error);

    case 4:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[2, null, $s$12], [2, "15:26-15:46", $s$12], [0, "15:13-15:47", $s$12], [16, "16:5-16:5", $s$12], [16, "16:5-16:5", $s$12]]),
    $m$12 = $M.fun("m$12", "smethod", null, $m$9, [], 0, 1, "17:4-19:5", 137, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = $mcall("call", $l[0][1].method, $.self);
      $.state = 1;

    case 1:
      $.goto = 2;
      return $awt($p);

    case 2:
      $.result = "static from B " + $p;
      $.goto = 4;
      continue;

    case 3:
      $.goto = 4;
      return $unhandledA($.error);

    case 4:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 3, [[2, null, $s$13], [2, "18:33-18:53", $s$13], [0, "18:13-18:54", $s$13], [16, "19:5-19:5", $s$13], [16, "19:5-19:5", $s$13]]);

$M.moduleExports();