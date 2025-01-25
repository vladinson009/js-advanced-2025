function solve(first, second) {
  while (second != 0) {
    let temp = second;
    second = first % second;
    first = temp;
  }
  console.log(first);
}
solve(15, 5);
