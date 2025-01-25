function solve(input) {
  let result = [];
  let biggestNumber = Number.MIN_SAFE_INTEGER;
  for (let each of input) {
    if (each >= biggestNumber) {
      biggestNumber = each;
      result.push(each);
    }
  }
  return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
