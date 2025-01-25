function solve(input) {
  const half = Math.ceil(input.length / 2);
  return input.toSorted((a, b) => a - b).slice(-half);
}
console.log(solve([4, 7, 2, 5]));
