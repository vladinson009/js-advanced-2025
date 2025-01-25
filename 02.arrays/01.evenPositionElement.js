function solve(arr) {
  const result = arr.reduce((acc, el, i) => {
    i % 2 === 0 ? acc.push(el) : null;
    return acc;
  }, []);

  console.log(result.join(' '));
}
solve(['5', '10']);
