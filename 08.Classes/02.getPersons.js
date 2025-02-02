function solve() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }
  const Anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
  const SoftUni = new Person('SoftUni');
  const Stephan = new Person('Stephan', 'Johnson', 25);
  const Gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
  return [Anna, SoftUni, Stephan, Gabriel];
}
function solution2() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }
  const people = [
    ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
    ['SoftUni'],
    ['Stephan', 'Johnson', 25],
    ['Gabriel', 'Peterson', 24, 'g.p@gmail.com'],
  ];
  return people.map((el) => new Person(...el));
}
console.log(solution2());
