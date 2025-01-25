function solve(input) {
  console.log(
    input
      .toSorted((a, b) => a - b)
      .slice(0, 2)
      .join(' ')
  );
}
solve([30, 15, 50, 5]);
