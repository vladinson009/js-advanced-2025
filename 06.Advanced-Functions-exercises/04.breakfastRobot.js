function solve(input) {
  const menu = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };
  const inStock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  const operations = {
    restock,
    prepare,
    report,
  };

  function restock(microelement, quantity) {
    inStock[microelement] += Number(quantity);
    return 'Success';
  }
  function prepare(recipe, quantity) {
    const remainingElements = {};
    const requiredProducts = Object.entries(menu[recipe]);

    for (const [ingredientType, value] of requiredProducts) {
      const neededIngredient = value * quantity;
      const availableIngredient = inStock[ingredientType];

      if (neededIngredient > availableIngredient) {
        return `Error: not enough ${ingredientType} in stock`;
      }
      remainingElements[ingredientType] = availableIngredient - neededIngredient;
    }
    Object.assign(inStock, remainingElements);
    return 'Success';
  }
  function report() {
    const result = [];
    for (const key in inStock) {
      const data = `${key}=${inStock[key]}`;
      result.push(data);
    }
    return result.join(' ');
  }

  return function (input) {
    const [action, ...rest] = input.split(' ');

    return operations[action] ? operations[action](...rest) : null;
  };
}

let manager = solve();
console.log(manager('prepare turkey 1')); // Success
console.log(manager('restock protein 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock fat 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock flavour 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('report')); // Error: not enough carbohydrate in stock
['', 'Error: not enough protein in stock'],
  ['', 'Success'],
  ['', 'Error: not enough carbohydrate in stock'],
  ['', 'Success'],
  ['', 'Error: not enough fat in stock'],
  ['', 'Success'],
  ['', 'Error: not enough flavour in stock'],
  ['', 'Success'],
  ['', 'Success'],
  ['', 'protein=0 carbohydrate=0 fat=0 flavour=0'];
