function solve(arr) {
  console.log(arr.reduce((acc, el) => acc + el, 0));
  console.log(arr.reduce((acc, el) => acc + 1 / el, 0));
  console.log(arr.reduce((acc, el) => acc + el / 1, ''));
}
solve([1, 2, 3]);
