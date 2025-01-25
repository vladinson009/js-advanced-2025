function solve(input) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;
  for (let i = 0; i < input.length; i++) {
    const arr = input[i];
    mainDiagonal += arr[i];
    secondaryDiagonal += arr[arr.length - 1 - i];
  }
  console.log(mainDiagonal, secondaryDiagonal);
}
solve([
  [20, 40],
  [10, 60],
]);
