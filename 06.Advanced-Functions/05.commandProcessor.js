function solve() {
  let result = '';
  function append(string) {
    return (result += string);
  }
  function removeStart(n) {
    return (result = result.slice(n));
  }
  function removeEnd(n) {
    return (result = result.slice(0, result.length - n));
  }
  function print() {
    console.log(result);
  }
  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}
solve();

let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
