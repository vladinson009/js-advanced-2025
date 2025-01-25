import { expect } from 'chai';

describe('Check functionality', () => {
  let calculator = null;
  beforeEach(() => {
    calculator = createCalculator();
  });
  it('should contains method add', () => {
    expect(calculator).to.has.ownProperty('add');
  });
  it('should contains method subtract', () => {
    expect(calculator).to.has.ownProperty('subtract');
  });
  it('should contains method get', () => {
    expect(calculator).to.has.ownProperty('get');
  });
  it('should parse string to number', () => {
    calculator.add('5');
    expect(calculator.get()).to.equal(5);
  });
  it('should work as expected', () => {
    calculator.add(5);
    expect(calculator.get()).to.equal(5);
  });
  it('should parse string to number', () => {
    calculator.subtract('5');
    expect(calculator.get()).to.equal(-5);
  });
  it('should work as expected with negative string', () => {
    calculator.add('-15');
    expect(calculator.get()).to.equal(-15);
  });
  it('should work as expected with negative number', () => {
    calculator.add(-15);
    expect(calculator.get()).to.equal(-15);
  });
  it('should return initialize value', () => {
    expect(calculator.get()).to.equal(0);
  });
});

function createCalculator() {
  let value = 0;
  return {
    add: function (num) {
      value += Number(num);
    },
    subtract: function (num) {
      value -= Number(num);
    },
    get: function () {
      return value;
    },
  };
}
