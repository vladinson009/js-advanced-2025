function solve(array) {
  // * created class Car
  class Car {
    constructor() {
      this.result = {};
    }
    // * method to add car
    addCar(brand, model, qty) {
      qty = Number(qty);
      if (!this.result[brand]) {
        this.result[brand] = {};
      }
      if (!this.result[brand][model]) {
        this.result[brand][model] = 0;
      }
      this.result[brand][model] += qty;
    }
    // * method to print on console
    printRegister() {
      for (const brand in this.result) {
        const models = this.result[brand];
        console.log(brand);
        for (const model in models) {
          console.log(`###${model} -> ${models[model]}`);
        }
      }
    }
  }
  // * making new instance of Car
  const carRegister = new Car();

  // * iterate on user input
  for (const carInfo of array) {
    let [brand, model, qty] = carInfo.split(' | ');
    // * using method of Car class instance
    carRegister.addCar(brand, model, qty);
  }
  // * using method of Car class instance
  carRegister.printRegister();
}
solve([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
