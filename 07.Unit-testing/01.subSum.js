function solve(arr, startIndex, endIndex) {
  if (Array.isArray(arr) == false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  console.log('here');

  if (endIndex >= arr.length) {
    endIndex = arr.length - 1;
  }

  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
