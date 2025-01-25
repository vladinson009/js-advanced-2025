function solve(arr) {
  const result = [];
  for (let i = 1; i < arr.length - 1; i += 2) {
    result.push(arr[i] * 2);
  }
  console.log(result.reverse().join(' '));
}
solve([3, 0, 10, 4, 7, 3]);
