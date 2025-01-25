import { expect } from 'chai';

describe('Main describe', () => {
  let enforcer = null;
  beforeEach(() => (enforcer = Object.create(mathEnforcer)));

  describe('test addFive method', () => {
    it('test with non-number', () => {
      expect(enforcer.addFive('123')).to.be.undefined;
      expect(enforcer.addFive('asd')).to.be.undefined;
    });
    it('test with a number', () => {
      expect(enforcer.addFive(123)).to.be.equal(128);
      expect(enforcer.addFive(4)).to.be.equal(9);
    });
    it('test with a negative number', () => {
      expect(enforcer.addFive(-5)).to.be.equal(0);
    });
    it('test floating numbers', () => {
      expect(enforcer.addFive(2.27)).to.be.closeTo(7.27, 0.01);
    });
  });
  describe('test subtractTen method', () => {
    it('test with non-number', () => {
      expect(enforcer.subtractTen('15')).to.be.undefined;
      expect(enforcer.subtractTen('asd')).to.be.undefined;
    });
    it('test with a number', () => {
      expect(enforcer.subtractTen(15)).to.be.equal(5);
      expect(enforcer.subtractTen(-15)).to.be.equal(-25);
    });
    it('test floating numbers', () => {
      expect(enforcer.subtractTen(12.27)).to.be.closeTo(2.27, 0.01);
    });
  });
  describe('test sum method', () => {
    it('test wit non-number on first argument', () => {
      expect(enforcer.sum('123', 123)).to.be.undefined;
    });
    it('test wit non-number on second argument', () => {
      expect(enforcer.sum(123, '123')).to.be.undefined;
    });
    it('test wit non-number', () => {
      expect(enforcer.sum('123', 'asdfg')).to.be.undefined;
    });
    it('test wit numbers', () => {
      expect(enforcer.sum(123, 123)).to.be.equal(246);
      expect(enforcer.sum(15, 29)).to.be.equal(44);
    });
    it('test wit negative numbers', () => {
      expect(enforcer.sum(-20, 25)).to.be.equal(5);
      expect(enforcer.sum(-15, -9)).to.be.equal(-24);
    });
    it('test floating numbers', () => {
      expect(enforcer.sum(2.27, 2.24)).to.be.closeTo(4.51, 0.01);
    });
  });
});

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== 'number') {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== 'number') {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return undefined;
    }
    return num1 + num2;
  },
};
