let g = "g";
export function runEval() {
  let a = "a";
  return (function() {
    let b = "b";
    debugger;
    console.log("before eval", g, a, b);
    eval(`console.log('hi', g, a, b); a+=b+g; console.log('there', g, a, b)`);
    console.log("eval", eval("a + b + g"));
    console.log("after eval", g, a, b);
    return [g, a, b];
  })();
}
