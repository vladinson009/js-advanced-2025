function solve(n, m) {
  let result = 0;
  for (let i = Number(n); i <= Number(m); i++) {
    result += i;
  }
  console.log(result);
}
solve('-8', '20');
