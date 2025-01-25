function solve(x1, y1, x2, y2) {
  /*
     {x1, y1} to {0, 0},
      {x2, y2} to {0, 0}
      {x1, y1} to {x2, y2}
      */
  result(x1, y1, 0, 0);
  result(x2, y2, 0, 0);
  result(x1, y1, x2, y2);

  function result(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let isValid = Number.isInteger(distance) ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
  }
}
solve(2, 1, 1, 1);
