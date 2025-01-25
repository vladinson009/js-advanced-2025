function solve(arr) {
  const result = arr.reduce((acc, el) => {
    el < 0 ? acc.unshift(el) : acc.push(el);
    return acc;
  }, []);
  console.log(result.join('\n'));
}
solve([7, -2, 8, 9]);
