function solve(input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let el = input[i][j];
      let nextEl = input[i][j + 1];

      el === nextEl ? count++ : null;
      i < input.length - 1 && el == input[i + 1][j] ? count++ : null;
    }
  }
  return count;
}
console.log(
  solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
  ])
);
