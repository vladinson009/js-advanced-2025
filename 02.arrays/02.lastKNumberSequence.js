function solve(n, k) {
  const result = [1];
  for (let i = 1; i < n; i++) {
    const startIdx = Math.max(0, i - k);
    const numToPush = result.slice(startIdx, i).reduce((acc, el) => acc + el, 0);
    result.push(numToPush);
  }
  return result;
}
solve(6, 3);
