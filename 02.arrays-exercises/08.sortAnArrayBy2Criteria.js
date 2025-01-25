function solve(arr) {
  const sorted = arr.toSorted((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(sorted.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);
