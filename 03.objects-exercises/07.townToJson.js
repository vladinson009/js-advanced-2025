function solve(input) {
  const result = [];

  for (let i = 1; i < input.length; i++) {
    let [, Town, Latitude, Longitude] = input[i].split('|').map((el) => el.trim());
    Latitude = Number(Number(Latitude).toFixed(2));
    Longitude = Number(Number(Longitude).toFixed(2));
    result.push({
      Town,
      Latitude,
      Longitude,
    });
  }
  return JSON.stringify(result);
}
console.log(
  solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |',
  ])
);
