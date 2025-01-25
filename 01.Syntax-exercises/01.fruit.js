function solve(fruit, grams, pricePerKg) {
  console.log(
    `I need $${((grams / 1000) * pricePerKg).toFixed(2)} to buy ${(grams / 1000).toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
solve('orange', 2500, 1.8);
