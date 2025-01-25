function solve(input) {
  function chaining(chainedParam) {
    input += chainedParam;
    return chaining;
  }

  chaining.toString = () => input;

  return chaining;
}
console.log(solve(1)(6)(-3).toString());
