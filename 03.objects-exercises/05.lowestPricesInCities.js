function solve(input) {
  const result = {};
  for (let data of input) {
    let [town, product, price] = data.split(' | ');
    price = Number(price);
    if (result[product] == undefined) {
      result[product] = { town, price };
    }
    if (result[product].price > price) {
      result[product] = { town, price };
    }
  }
  for (let key in result) {
    console.log(`${key} -> ${result[key].price} (${result[key].town})`);
  }
}
solve([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);
