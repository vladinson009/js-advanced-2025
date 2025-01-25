function solve(input) {
  const catalogue = {};
  for (const product of input) {
    let [name, price] = product.split(' : ');
    price = Number(price);

    const category = name.at(0);
    if (catalogue[category] == undefined) {
      catalogue[category] = {};
    }
    catalogue[category][name] = price;
  }
  const sortedCategory = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (let category of sortedCategory) {
    const sortedItems = Object.keys(catalogue[category]).sort((a, b) => a.localeCompare(b));
    console.log(category);

    for (let item of sortedItems) {
      console.log(`  ${item}: ${catalogue[category][item]}`);
    }
  }
}
solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
