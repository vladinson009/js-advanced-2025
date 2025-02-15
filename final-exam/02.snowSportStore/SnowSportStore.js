class SnowSportStore {
  constructor(storeName) {
    this.storeName = storeName;
    this.availableEquipment = [];
    this.revenue = 0;
  }
  addEquipment(type, price, condition) {
    const validPrice = !Number.isNaN(Number(price)) && price > 0;
    if (!type || !validPrice || !condition) {
      throw new Error('Invalid equipment details!');
    }
    this.availableEquipment.push({ type, price, condition });
    return `New equipment added: ${type} / ${condition} condition - ${Number(
      price
    ).toFixed(2)}$.`;
  }
  rentEquipment(type, rentalDays) {
    const idx = this.availableEquipment.findIndex(
      (el) => el.type == type && el.condition == 'used'
    );
    if (idx == -1) {
      throw new Error(`${type} is not available for rent!`);
    }
    const rentalPrice = this.availableEquipment[idx].price * 0.1 * rentalDays;
    this.revenue += rentalPrice;
    return `${type} rented for ${rentalDays} days. Total cost: ${rentalPrice.toFixed(
      2
    )}$.`;
  }

  sellEquipment(type) {
    const idx = this.availableEquipment.findIndex(
      (el) => el.type == type && el.condition == 'new'
    );
    if (idx == -1) {
      throw new Error(`${type} is not available for purchase!`);
    }
    const item = this.availableEquipment.splice(idx, 1)[0];
    this.revenue += item.price;
    return `${type} has been sold for ${item.price.toFixed(2)}$.`;
  }
  showRevenue() {
    if (this.revenue == 0) {
      return 'Nothing has been sold or rented.';
    }
    return `${this.storeName} has made a total revenue of ${this.revenue.toFixed(
      2
    )}$.`;
  }
}

let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.rentEquipment('Boots', 3));
