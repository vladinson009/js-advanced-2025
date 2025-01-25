function solve(coordinates) {
  const dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let currentPlayer = 'X';
  for (let i = 0; i < coordinates.length; i++) {
    const [x, y] = coordinates[i].split(' ');

    if (dashboard[x][y]) {
      console.log('This place is already taken. Please choose another!');
    } else {
      dashboard[x][y] = currentPlayer;
      currentPlayer === 'X' ? (currentPlayer = 'O') : (currentPlayer = 'X');
    }

    if (isWin()) {
      break;
    }
    if (isFullBoard()) {
      console.log('The game ended! Nobody wins :(');
      break;
    }
  }
  for (const row of dashboard) {
    console.log(row.join('\t'));
  }

  function isFullBoard() {
    let status = true;
    for (let i = 0; i < dashboard.length; i++) {
      const row = dashboard[i];

      for (let j = 0; j < row.length; j++) {
        if (row[j] === false) {
          status = false;
          break;
        }
      }
    }
    return status;
  }
  function isWin() {
    let result = [];
    let firstDiagonal = '';
    let secondDiagonal = '';
    for (let i = 0; i < dashboard.length; i++) {
      let vertical = '';
      let horizontal = '';
      firstDiagonal += dashboard[i][i];
      secondDiagonal += dashboard[i][dashboard.length - 1 - i];

      for (let j = 0; j < dashboard.length; j++) {
        vertical += dashboard[j][i];
        horizontal += dashboard[i][j];
      }
      result.push(vertical, horizontal);
    }
    result.push(firstDiagonal, secondDiagonal);
    for (let ticTac of result) {
      if (ticTac == 'XXX') {
        console.log('Player X wins!');
        return true;
      } else if (ticTac == 'OOO') {
        console.log('Player O wins!');
        return true;
      }
    }
    return false;
  }
}
solve(['0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0']);
