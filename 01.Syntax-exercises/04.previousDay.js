function solve(y, m, d) {
  const date = new Date(y, m - 1, d - 1);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
console.log(solve(2015, 5, 10));
