var $M = require("@effectful/debugger"),
    $x = $M.context,
    $ret = $M.ret,
    $unhandled = $M.unhandled,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  a: [1, "1:9-1:10"]
}, null, 0],
    $s$2 = [{
  i: [1, "2:6-2:7"],
  j: [2, "3:4-3:5"]
}, $s$1, 1],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 2, "1:0-11:0", 160, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$1($);
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
}, null, null, 0, [[0, "1:0-10:1", $s$1], [16, "11:0-11:0", $s$1], [16, "11:0-11:0", $s$1]]),
    $m$1 = $M.fun("m$1", "a", null, $m$0, [], 2, 3, "1:0-10:1", 128, function ($, $l, $p) {
  var $2, $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = 0;
      $l[2] = 0;
      $1 = $l[1];
      $l[1] = $1 + 1;
      $2 = $l[2];
      $l[2] = $2 + 1;
      $.goto = 1;
      ($x.call = eff0)($1, $2);
      $.state = 1;

    case 1:
      $.goto = 2;
      ($x.call = eff1)($l[1]);
      $.state = 2;

    case 2:
      $l[1] = $l[1] + 1;
      $.goto = 3;
      ($x.call = eff2)(2, $l[2]);
      $.state = 3;

    case 3:
      $.goto = 4;
      ($x.call = eff3)($l[1] = $l[1] + 2, $l[2]);
      $.state = 4;

    case 4:
      $.goto = 6;
      ($x.call = eff4)($l[2]);
      continue;

    case 5:
      $.goto = 6;
      return $unhandled($.error);

    case 6:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, "4:2-4:16", $s$2], [2, "5:2-5:9", $s$2], [2, "7:2-7:12", $s$2], [2, "8:2-8:19", $s$2], [2, "9:2-9:9", $s$2], [16, "10:1-10:1", $s$2], [16, "10:1-10:1", $s$2]]);

$M.moduleExports();