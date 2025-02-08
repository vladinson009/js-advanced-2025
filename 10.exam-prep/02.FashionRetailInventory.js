class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }
  isProduct(productName, size) {
    return this.productStock.find(
      (product) => product.productName == productName && product.size == size
    );
  }
  addProduct(productName, size, quantity, price) {
    quantity = Number(quantity);
    price = Number(price);
    const isProduct = this.isProduct(productName, size);
    if (isProduct) {
      isProduct.quantity += quantity;
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    }
    this.productStock.push({ productName, size, quantity, price });
    return `The product ${productName}, size ${size} was successfully added to the inventory`;
  }
  sendProduct(productName, size) {
    const isProduct = this.isProduct(productName, size);
    if (!isProduct) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    }
    const idx = this.productStock.indexOf(isProduct);
    this.productStock.splice(idx, 1);
    return `The product ${productName}, size ${size} was successfully removed from the inventory`;
  }
  findProductsBySize(size) {
    const prodcuts = this.productStock.filter((product) => product.size == size);
    if (prodcuts.length < 1) {
      return `There are no products available in that size`;
    }
    return prodcuts
      .map(({ productName, quantity }) => `${productName}-${quantity} pieces`)
      .join(', ');
  }
  listProducts() {
    if (this.productStock.length < 1) {
      return `${this.storehouse} storehouse is empty`;
    }
    const result = [
      `${this.storehouse} storehouse in ${this.location} available products:`,
    ];
    this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
    for (const { productName, size, quantity, price } of this.productStock) {
      result.push(
        `${productName}/Size:${size}/Quantity:${quantity}/Price:${price}$`
      );
    }
    return result.join('\n');
  }
}
const storeHouse = new FashionRetailInventory('East', 'Milano');
console.log(storeHouse.addProduct('Shirt', 'M', 10, 25.0));
console.log(storeHouse.addProduct('T-Shirt', 'M', 10, 25.0));
console.log(storeHouse.addProduct('Shirt', 'L', 5, 30.0));
console.log(storeHouse.addProduct('Shoes', '9', 8, 50.0));
console.log(storeHouse.sendProduct('Shoes', '9', 8, 50.0));
console.log(storeHouse.listProducts());
