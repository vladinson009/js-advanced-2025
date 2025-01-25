function solve(input) {
  const sortedNumbers = input.toSorted((a, b) => a - b);
  let result = [];
  while (sortedNumbers.length > 0) {
    result.push(sortedNumbers.shift(), sortedNumbers.pop());
  }
  result.length = input.length;
  return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
