function solve(names) {
  return names
    .toSorted((a, b) => a.localeCompare(b))
    .map((name, i) => `${i + 1}.${name}`)
    .join('\n');
}
console.log(solve(['John', 'Bob', 'Christina', 'Ema']));
