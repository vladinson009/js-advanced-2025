function solve(input) {
  let biggestNumber = Number.MIN_SAFE_INTEGER;
  input.forEach((array) => {
    array.forEach((el) => (el > biggestNumber ? (biggestNumber = el) : null));
  });
  return biggestNumber;
}
solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
