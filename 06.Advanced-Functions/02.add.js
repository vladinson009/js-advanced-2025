function solve(input) {
  return function (a) {
    return a + input;
  };
}
solve();
let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));
