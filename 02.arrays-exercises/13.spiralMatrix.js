function solve(x, y) {
  const matrix = [];
  let counter = 1;

  let startCol = 0;
  let endCol = y - 1;
  let startRow = 0;
  let endRow = x - 1;

  for (let i = 0; i < x; i++) {
    let row = [];
    for (let j = 0; j < y; j++) {
      row.push(undefined);
    }
    matrix.push(row);
  }
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  for (let row of matrix) {
    console.log(row.join(' '));
  }
}
solve(5, 5);
