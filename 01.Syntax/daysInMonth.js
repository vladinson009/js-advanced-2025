function solve(month, year) {
  const date = new Date(year, month, 0).getDate();
  console.log(date);
}
solve(2, 2012);
