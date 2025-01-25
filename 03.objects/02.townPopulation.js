function solve(arr) {
  const obj = {};
  for (let each of arr) {
    const [town, population] = each.split(' <-> ');
    if (!obj[town]) {
      obj[town] = Number(population);
    } else {
      obj[town] += Number(population);
    }
  }
  for (town in obj) {
    console.log(`${town} : ${obj[town]}`);
  }
}
solve([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);
