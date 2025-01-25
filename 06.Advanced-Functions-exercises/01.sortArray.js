function solve(arr, order) {
  return arr.toSorted((a, b) => {
    if (order === 'asc') {
      return a - b;
    } else if (order === 'desc') {
      return b - a;
    } else {
      return 0;
    }
  });
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
