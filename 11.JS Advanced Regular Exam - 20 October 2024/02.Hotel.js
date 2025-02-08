class Hotel {
  constructor(initialBudget) {
    this.initialBudget = Number(initialBudget);
    this.roomAvailability = {};
    this.supplyStock = {};
  }
  restockSupplies(supplies) {
    const result = [];
    for (const each of supplies) {
      let [name, qty, totalPrice] = each.split(' ');
      qty = Number(qty);
      totalPrice = Number(totalPrice);

      if (totalPrice <= this.initialBudget) {
        if (!this.supplyStock.hasOwnProperty(name)) {
          this.supplyStock[name] = 0;
        }
        this.supplyStock[name] += qty;
        this.initialBudget -= totalPrice;
        result.push(`Successfully stocked ${qty} ${name}`);
      } else {
        result.push(`There was not enough money to restock ${qty} ${name}`);
      }
    }
    return result.join('\n');
  }
  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (this.roomAvailability.hasOwnProperty(roomType)) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    }
    this.roomAvailability[roomType] = { pricePerNight, neededSupplies: {} };

    for (const each of neededSupplies) {
      let [name, qty] = each.split(' ');
      qty = Number(qty);
      this.roomAvailability[roomType].neededSupplies[name] = qty;
    }

    const roomCount = Object.keys(this.roomAvailability).length;
    return `Great idea! Now with the ${roomType}, we have ${roomCount} types of rooms available, any other ideas?`;
  }
  showAvailableRooms() {
    if (Object.keys(this.roomAvailability).length < 1) {
      return 'Our rooms are not ready yet, please come back later...';
    }
    const result = [];
    for (const roomType in this.roomAvailability) {
      result.push(
        `${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`
      );
    }
    return result.join('\n');
  }
  bookRoom(roomType) {
    if (!this.roomAvailability.hasOwnProperty(roomType)) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }
    const neededSupplies = this.roomAvailability[roomType].neededSupplies;

    for (const supply in neededSupplies) {
      if (
        !this.supplyStock.hasOwnProperty(supply) ||
        this.supplyStock[supply] < neededSupplies[supply]
      ) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }
    return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`;
  }
}
let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(['Soap 100 50', 'Towels 20 100', 'Shampoo 50 75'])
);

console.log(hotel.addRoomType('Deluxe Suite', ['Soap 5', 'Towels 2'], 200));
console.log(hotel.addRoomType('Standard Room', ['Soap 2', 'Towels 1'], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom('Apartment'));
console.log(hotel.bookRoom('Deluxe Suite'));
