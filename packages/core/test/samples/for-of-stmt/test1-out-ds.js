var $M = require("@effectful/debugger"),
    $iterator = $M.iterator,
    $iterFin = $M.iterFin,
    $x = $M.context,
    $ret = $M.ret,
    $unhandled = $M.unhandled,
    $raise = $M.raise,
    $brk = $M.brk,
    $lset = $M.lset,
    $mcall = $M.mcall,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  a: [1, "1:9-1:10"],
  b: [2, "7:9-7:10"],
  c: [3, "14:9-14:10"],
  d: [4, "23:9-23:10"],
  p: [5, "30:9-30:10"]
}, null, 0],
    $s$2 = [{
  i: [1, "2:11-2:12"]
}, $s$1, 1],
    $s$3 = [{}, $s$2, 2],
    $s$4 = [{
  i: [1, "8:11-8:12"]
}, $s$1, 1],
    $s$5 = [{}, $s$4, 2],
    $s$6 = [{
  i: [1, "15:11-15:12"],
  j: [2, "16:13-16:14"]
}, $s$1, 1],
    $s$7 = [{}, $s$6, 2],
    $s$8 = [{}, $s$7, 3],
    $s$9 = [{
  i: [1, "24:11-24:12"]
}, $s$1, 1],
    $s$10 = [{}, $s$9, 2],
    $s$11 = [{
  i: [1, "31:11-31:12"]
}, $s$1, 1],
    $s$12 = [{}, $s$11, 2],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 6, "1:0-36:0", 32, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $lset($l, 1, $m$1($));
      $lset($l, 2, $m$2($));
      $lset($l, 3, $m$3($));
      $lset($l, 4, $m$4($));
      $lset($l, 5, $m$5($));
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
}, null, null, 0, [[0, "1:0-6:1", $s$1], [16, "36:0-36:0", $s$1], [16, "36:0-36:0", $s$1]]),
    $m$1 = $M.fun("m$1", "a", null, $m$0, [], 0, 3, "1:0-6:1", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $l = $.$ = [$l, void 0, void 0];
      $.goto = 2;
      $p = $iterator(some);
      $.state = 2;

    case 2:
      $l[2] = $p;
      $.state = 3;

    case 3:
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $x.call = $l[2].next;
      $.goto = 6;
      $p = $l[2].next();
      $.state = 6;

    case 6:
      if ($p.done) {
        $.state = 7;
      } else {
        $.goto = 9;
        continue;
      }

    case 7:
      $.state = 8;

    case 8:
      $l[0][2] = 18;
      $.goto = 17;
      continue;

    case 9:
      $lset($l[0], 1, $p.value);
      $.goto = 10;
      $brk();
      $.state = 10;

    case 10:
      $.goto = 11;
      ($x.call = eff)(1);
      $.state = 11;

    case 11:
      $.goto = 12;
      $brk();
      $.state = 12;

    case 12:
      $l = $.$ = [$l[0], void 0, $l[2]];
      $.goto = 4;
      continue;

    case 13:
      return $raise($.error);

    case 14:
      $.goto = 15;
      $iterFin($l[2]);
      $.state = 15;

    case 15:
      $.goto = $l[1];
      continue;

    case 16:
      return $raise($.error);

    case 17:
      $l = $.$ = $l[0];
      $.goto = $l[2];
      continue;

    case 18:
      $.goto = 19;
      $brk();
      $.state = 19;

    case 19:
      $.goto = 20;
      ($x.call = eff)(2);
      $.state = 20;

    case 20:
      $.goto = 22;
      $brk();
      continue;

    case 21:
      $.goto = 22;
      return $unhandled($.error);

    case 22:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 15:
    case 14:
    case 13:
    case 8:
    case 3:
      $.goto = 17;
      $l[0][2] = 16;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $.goto = 14;
      $l[1] = 13;
      break;

    default:
      $.goto = 21;
  }
}, function ($, $l) {
  switch ($.state) {
    case 15:
    case 14:
    case 13:
    case 8:
    case 3:
      $l[0][2] = 22;
      $.goto = 17;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $l[1] = 17;
      $l[0][2] = 22;
      $.goto = 14;
      break;

    default:
      $.goto = 22;
      break;
  }
}, 1, [[4, "2:2-4:3", $s$2], [2, "2:16-2:20", $s$3], [0, null, $s$3], [0, null, $s$3], [4, "2:11-2:12", $s$3], [2, "2:16-2:20", $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [4, "3:4-3:11", $s$3], [2, "3:4-3:10", $s$3], [36, "4:3-4:3", $s$3], [0, null, $s$3], [0, null, $s$3], [2, "2:16-2:20", $s$3], [0, null, $s$3], [0, null, $s$2], [0, null, $s$2], [4, "5:2-5:9", $s$2], [2, "5:2-5:8", $s$2], [36, "6:1-6:1", $s$2], [16, "6:1-6:1", $s$2], [16, "6:1-6:1", $s$2]]),
    $m$2 = $M.fun("m$2", "b", null, $m$0, [], 0, 3, "7:0-12:1", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $l = $.$ = [$l, void 0, void 0];
      $.goto = 2;
      $p = ($x.call = eff)("d");
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = $iterator($p);
      $.state = 3;

    case 3:
      $l[2] = $p;
      $.state = 4;

    case 4:
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk();
      $.state = 6;

    case 6:
      $x.call = $l[2].next;
      $.goto = 7;
      $p = $l[2].next();
      $.state = 7;

    case 7:
      if ($p.done) {
        $.state = 8;
      } else {
        $.goto = 10;
        continue;
      }

    case 8:
      $.state = 9;

    case 9:
      $l[0][2] = 19;
      $.goto = 18;
      continue;

    case 10:
      $lset($l[0], 1, $p.value);
      $.goto = 11;
      $brk();
      $.state = 11;

    case 11:
      $.goto = 12;
      ($x.call = eff)($l[0][1]);
      $.state = 12;

    case 12:
      $.goto = 13;
      $brk();
      $.state = 13;

    case 13:
      $l = $.$ = [$l[0], void 0, $l[2]];
      $.goto = 5;
      continue;

    case 14:
      return $raise($.error);

    case 15:
      $.goto = 16;
      $iterFin($l[2]);
      $.state = 16;

    case 16:
      $.goto = $l[1];
      continue;

    case 17:
      return $raise($.error);

    case 18:
      $l = $.$ = $l[0];
      $.goto = $l[2];
      continue;

    case 19:
      $.goto = 20;
      $brk();
      $.state = 20;

    case 20:
      $.goto = 21;
      ($x.call = eff)($l[1]);
      $.state = 21;

    case 21:
      $.goto = 23;
      $brk();
      continue;

    case 22:
      $.goto = 23;
      return $unhandled($.error);

    case 23:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 16:
    case 15:
    case 14:
    case 9:
    case 4:
      $.goto = 18;
      $l[0][2] = 17;
      break;

    case 13:
    case 12:
    case 11:
    case 10:
    case 8:
    case 7:
    case 6:
    case 5:
      $.goto = 15;
      $l[1] = 14;
      break;

    default:
      $.goto = 22;
  }
}, function ($, $l) {
  switch ($.state) {
    case 16:
    case 15:
    case 14:
    case 9:
    case 4:
      $l[0][2] = 23;
      $.goto = 18;
      break;

    case 13:
    case 12:
    case 11:
    case 10:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[1] = 18;
      $l[0][2] = 23;
      $.goto = 15;
      break;

    default:
      $.goto = 23;
      break;
  }
}, 1, [[4, "8:2-10:3", $s$4], [2, "8:16-8:24", $s$5], [2, "8:16-8:24", $s$5], [0, null, $s$5], [0, null, $s$5], [4, "8:11-8:12", $s$5], [2, "8:16-8:24", $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [4, "9:4-9:11", $s$5], [2, "9:4-9:10", $s$5], [36, "10:3-10:3", $s$5], [0, null, $s$5], [0, null, $s$5], [2, "8:16-8:24", $s$5], [0, null, $s$5], [0, null, $s$4], [0, null, $s$4], [4, "11:2-11:9", $s$4], [2, "11:2-11:8", $s$4], [36, "12:1-12:1", $s$4], [16, "12:1-12:1", $s$4], [16, "12:1-12:1", $s$4]]),
    $m$3 = $M.fun("m$3", "c", null, $m$0, [], 0, 4, "14:0-21:1", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $l = $.$ = [$l, void 0, void 0, void 0];
      $.goto = 2;
      $p = $iterator(some);
      $.state = 2;

    case 2:
      $l[3] = $p;
      $.state = 3;

    case 3:
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $x.call = $l[3].next;
      $.goto = 6;
      $p = $l[3].next();
      $.state = 6;

    case 6:
      if ($p.done) {
        $.state = 7;
      } else {
        $.goto = 9;
        continue;
      }

    case 7:
      $.state = 8;

    case 8:
      $l[0][3] = 34;
      $.goto = 33;
      continue;

    case 9:
      $lset($l[0], 1, $p.value);
      $.goto = 10;
      $brk();
      $.state = 10;

    case 10:
      $l = $.$ = [$l, void 0, void 0];
      $.goto = 11;
      $p = $iterator(other);
      $.state = 11;

    case 11:
      $l[2] = $p;
      $.state = 12;

    case 12:
      $.state = 13;

    case 13:
      $.goto = 14;
      $brk();
      $.state = 14;

    case 14:
      $x.call = $l[2].next;
      $.goto = 15;
      $p = $l[2].next();
      $.state = 15;

    case 15:
      if ($p.done) {
        $.state = 16;
      } else {
        $.goto = 18;
        continue;
      }

    case 16:
      $.state = 17;

    case 17:
      $l[0][2] = 27;
      $.goto = 26;
      continue;

    case 18:
      $lset($l[0][0], 2, $p.value);
      $.goto = 19;
      $brk();
      $.state = 19;

    case 19:
      $.goto = 20;
      ($x.call = eff)($l[0][0][1], $l[0][0][2]);
      $.state = 20;

    case 20:
      $.goto = 21;
      $brk();
      $.state = 21;

    case 21:
      $l = $.$ = [$l[0], void 0, $l[2]];
      $.goto = 13;
      continue;

    case 22:
      return $raise($.error);

    case 23:
      $.goto = 24;
      $iterFin($l[2]);
      $.state = 24;

    case 24:
      $.goto = $l[1];
      continue;

    case 25:
      return $raise($.error);

    case 26:
      $l = $.$ = $l[0];
      $.goto = $l[2];
      continue;

    case 27:
      $.goto = 28;
      $brk();
      $.state = 28;

    case 28:
      $l = $.$ = [$l[0], void 0, void 0, $l[3]];
      $.goto = 4;
      continue;

    case 29:
      return $raise($.error);

    case 30:
      $.goto = 31;
      $iterFin($l[3]);
      $.state = 31;

    case 31:
      $.goto = $l[1];
      continue;

    case 32:
      return $raise($.error);

    case 33:
      $l = $.$ = $l[0];
      $.goto = $l[3];
      continue;

    case 34:
      $.goto = 35;
      $brk();
      $.state = 35;

    case 35:
      $.goto = 36;
      ($x.call = eff)($l[1], $l[2]);
      $.state = 36;

    case 36:
      $.goto = 38;
      $brk();
      continue;

    case 37:
      $.goto = 38;
      return $unhandled($.error);

    case 38:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 31:
    case 30:
    case 29:
    case 8:
    case 3:
      $.goto = 33;
      $l[0][3] = 32;
      break;

    case 28:
    case 27:
    case 26:
    case 25:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $.goto = 30;
      $l[1] = 29;
      break;

    case 11:
    case 10:
      $.goto = 30;
      $l[0][1] = 29;
      break;

    case 24:
    case 23:
    case 22:
    case 17:
    case 12:
      $.goto = 26;
      $l[0][2] = 25;
      break;

    case 21:
    case 20:
    case 19:
    case 18:
    case 16:
    case 15:
    case 14:
    case 13:
      $.goto = 23;
      $l[1] = 22;
      break;

    default:
      $.goto = 37;
  }
}, function ($, $l) {
  switch ($.state) {
    case 31:
    case 30:
    case 29:
    case 8:
    case 3:
      $l[0][3] = 38;
      $.goto = 33;
      break;

    case 28:
    case 27:
    case 26:
    case 25:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $l[1] = 33;
      $l[0][3] = 38;
      $.goto = 30;
      break;

    case 24:
    case 23:
    case 22:
    case 17:
    case 12:
      $l[0][2] = 30;
      $l[0][1] = 33;
      $l[0][0][3] = 38;
      $.goto = 26;
      break;

    case 21:
    case 20:
    case 19:
    case 18:
    case 16:
    case 15:
    case 14:
    case 13:
      $l[1] = 26;
      $l[0][2] = 30;
      $l[0][1] = 33;
      $l[0][0][3] = 38;
      $.goto = 23;
      break;

    default:
      $.goto = 38;
      break;
  }
}, 1, [[4, "15:2-19:3", $s$6], [2, "15:16-15:20", $s$7], [0, null, $s$7], [0, null, $s$7], [4, "15:11-15:12", $s$7], [2, "15:16-15:20", $s$7], [0, null, $s$7], [0, null, $s$7], [0, null, $s$7], [4, "16:4-18:5", $s$7], [2, "16:18-16:23", $s$8], [0, null, $s$8], [0, null, $s$8], [4, "16:13-16:14", $s$8], [2, "16:18-16:23", $s$8], [0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [4, "17:6-17:16", $s$8], [2, "17:6-17:15", $s$8], [36, "18:5-18:5", $s$8], [0, null, $s$8], [0, null, $s$8], [2, "16:18-16:23", $s$8], [0, null, $s$8], [0, null, $s$7], [0, null, $s$7], [36, "19:3-19:3", $s$7], [0, null, $s$7], [0, null, $s$7], [2, "15:16-15:20", $s$7], [0, null, $s$7], [0, null, $s$6], [0, null, $s$6], [4, "20:2-20:12", $s$6], [2, "20:2-20:11", $s$6], [36, "21:1-21:1", $s$6], [16, "21:1-21:1", $s$6], [16, "21:1-21:1", $s$6]]),
    $m$4 = $M.fun("m$4", "d", null, $m$0, [], 0, 3, "23:0-28:1", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $l = $.$ = [$l, void 0, void 0];
      $.goto = 2;
      $p = $iterator(some);
      $.state = 2;

    case 2:
      $l[2] = $p;
      $.state = 3;

    case 3:
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $x.call = $l[2].next;
      $.goto = 6;
      $p = $l[2].next();
      $.state = 6;

    case 6:
      if ($p.done) {
        $.state = 7;
      } else {
        $.goto = 9;
        continue;
      }

    case 7:
      $.state = 8;

    case 8:
      $l[0][2] = 18;
      $.goto = 17;
      continue;

    case 9:
      $lset($l[0], 1, $p.value);
      $.goto = 10;
      $brk();
      $.state = 10;

    case 10:
      $.goto = 11;
      ($x.call = eff)(1);
      $.state = 11;

    case 11:
      $.goto = 12;
      $brk();
      $.state = 12;

    case 12:
      $l = $.$ = [$l[0], void 0, $l[2]];
      $.goto = 4;
      continue;

    case 13:
      return $raise($.error);

    case 14:
      $.goto = 15;
      $iterFin($l[2]);
      $.state = 15;

    case 15:
      $.goto = $l[1];
      continue;

    case 16:
      return $raise($.error);

    case 17:
      $l = $.$ = $l[0];
      $.goto = $l[2];
      continue;

    case 18:
      $.goto = 19;
      $brk();
      $.state = 19;

    case 19:
      $.goto = 20;
      ($x.call = eff)(2);
      $.state = 20;

    case 20:
      $.goto = 22;
      $brk();
      continue;

    case 21:
      $.goto = 22;
      return $unhandled($.error);

    case 22:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 15:
    case 14:
    case 13:
    case 8:
    case 3:
      $.goto = 17;
      $l[0][2] = 16;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $.goto = 14;
      $l[1] = 13;
      break;

    default:
      $.goto = 21;
  }
}, function ($, $l) {
  switch ($.state) {
    case 15:
    case 14:
    case 13:
    case 8:
    case 3:
      $l[0][2] = 22;
      $.goto = 17;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $l[1] = 17;
      $l[0][2] = 22;
      $.goto = 14;
      break;

    default:
      $.goto = 22;
      break;
  }
}, 1, [[4, "24:2-26:3", $s$9], [2, "24:16-24:20", $s$10], [0, null, $s$10], [0, null, $s$10], [4, "24:11-24:12", $s$10], [2, "24:16-24:20", $s$10], [0, null, $s$10], [0, null, $s$10], [0, null, $s$10], [4, "25:4-25:11", $s$10], [2, "25:4-25:10", $s$10], [36, "26:3-26:3", $s$10], [0, null, $s$10], [0, null, $s$10], [2, "24:16-24:20", $s$10], [0, null, $s$10], [0, null, $s$9], [0, null, $s$9], [4, "27:2-27:9", $s$9], [2, "27:2-27:8", $s$9], [36, "28:1-28:1", $s$9], [16, "28:1-28:1", $s$9], [16, "28:1-28:1", $s$9]]),
    $m$5 = $M.fun("m$5", "p", null, $m$0, [], 0, 3, "30:0-35:1", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $l = $.$ = [$l, void 0, void 0];
      $.goto = 2;
      $p = $iterator(some);
      $.state = 2;

    case 2:
      $l[2] = $p;
      $.state = 3;

    case 3:
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $x.call = $l[2].next;
      $.goto = 6;
      $p = $l[2].next();
      $.state = 6;

    case 6:
      if ($p.done) {
        $.state = 7;
      } else {
        $.goto = 9;
        continue;
      }

    case 7:
      $.state = 8;

    case 8:
      $l[0][2] = 18;
      $.goto = 17;
      continue;

    case 9:
      $lset($l[0], 1, $p.value);
      $.goto = 10;
      $brk();
      $.state = 10;

    case 10:
      $.goto = 11;
      $mcall("log", console, 1);
      $.state = 11;

    case 11:
      $.goto = 12;
      $brk();
      $.state = 12;

    case 12:
      $l = $.$ = [$l[0], void 0, $l[2]];
      $.goto = 4;
      continue;

    case 13:
      return $raise($.error);

    case 14:
      $.goto = 15;
      $iterFin($l[2]);
      $.state = 15;

    case 15:
      $.goto = $l[1];
      continue;

    case 16:
      return $raise($.error);

    case 17:
      $l = $.$ = $l[0];
      $.goto = $l[2];
      continue;

    case 18:
      $.goto = 19;
      $brk();
      $.state = 19;

    case 19:
      $.goto = 20;
      $mcall("log", console, 2);
      $.state = 20;

    case 20:
      $.goto = 22;
      $brk();
      continue;

    case 21:
      $.goto = 22;
      return $unhandled($.error);

    case 22:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 15:
    case 14:
    case 13:
    case 8:
    case 3:
      $.goto = 17;
      $l[0][2] = 16;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $.goto = 14;
      $l[1] = 13;
      break;

    default:
      $.goto = 21;
  }
}, function ($, $l) {
  switch ($.state) {
    case 15:
    case 14:
    case 13:
    case 8:
    case 3:
      $l[0][2] = 22;
      $.goto = 17;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 7:
    case 6:
    case 5:
    case 4:
      $l[1] = 17;
      $l[0][2] = 22;
      $.goto = 14;
      break;

    default:
      $.goto = 22;
      break;
  }
}, 1, [[4, "31:2-33:3", $s$11], [2, "31:16-31:20", $s$12], [0, null, $s$12], [0, null, $s$12], [4, "31:11-31:12", $s$12], [2, "31:16-31:20", $s$12], [0, null, $s$12], [0, null, $s$12], [0, null, $s$12], [4, "32:4-32:19", $s$12], [2, "32:4-32:18", $s$12], [36, "33:3-33:3", $s$12], [0, null, $s$12], [0, null, $s$12], [2, "31:16-31:20", $s$12], [0, null, $s$12], [0, null, $s$11], [0, null, $s$11], [4, "34:2-34:17", $s$11], [2, "34:2-34:16", $s$11], [36, "35:1-35:1", $s$11], [16, "35:1-35:1", $s$11], [16, "35:1-35:1", $s$11]]);

$M.moduleExports();