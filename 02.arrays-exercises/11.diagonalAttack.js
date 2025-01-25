function solve(input) {
  const matrix = [];
  for (const each of input) {
    const arr = each.split(' ').map(Number);
    matrix.push(arr);
  }
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][matrix.length - 1 - i];
  }
  if (firstDiagonal === secondDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && i !== matrix.length - 1 - j) {
          matrix[i][j] = firstDiagonal;
        }
      }
    }
  }
  for (const row of matrix) {
    console.log(row.join(' '));
  }
}
solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
