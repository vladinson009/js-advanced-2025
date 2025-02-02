function tickets(input, criteria) {
  class Ticket {
    destination;
    price;
    status;
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  const result = [];

  for (const element of input) {
    let [destinatioin, price, status] = element.split('|');
    price = Number(price);
    const currentDestination = new Ticket(destinatioin, price, status);
    result.push(currentDestination);
  }
  return result.sort((a, b) => {
    if (criteria == 'price') {
      return a[criteria] - b[criteria];
    } else {
      return a[criteria].localeCompare(b[criteria]);
    }
  });
}
console.log(
  tickets(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'status'
  )
);
