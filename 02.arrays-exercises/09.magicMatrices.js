function solve(arr) {
  let isMagic = true;
  const sum = arr[0].reduce((acc, el) => acc + el, 0);
  for (let i = 0; i < arr.length; i++) {
    let horizontal = 0;
    let vertical = 0;

    for (let j = 0; j < arr.length; j++) {
      horizontal += arr[i][j];
      vertical += arr[j][i];
    }
    if (horizontal !== sum || vertical !== sum) {
      isMagic = false;
      break;
    }
  }
  return isMagic;
}
console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
