import { expect } from 'chai';
import { PaymentPackage } from './PaymentPackage.js';
describe('Payment Package functionality check', function () {
  let instance;
  beforeEach(() => (instance = new PaymentPackage('George', 125)));
  describe('Happy Path', function () {
    it('Works with valid parameters', () => {
      expect(() => new PaymentPackage('George', 125)).to.not.throw();
      expect(() => new PaymentPackage('12', 0)).to.not.throw();
      expect(() => new PaymentPackage('George', 12)).to.not.throw();
    });
    it('get name', () => {
      expect(instance.name).to.equal('George');
    });
    it('set name', () => {
      instance.name = 'Peter';
      expect(instance.name).to.equal('Peter');
    });
    it('get value', () => {
      expect(instance.value).to.equal(125);
    });
    it('set value', () => {
      instance.value = 150;
      expect(instance.value).to.equal(150);
    });
    it('get VAT', () => {
      expect(instance.VAT).to.equal(20);
    });
    it('set VAT', () => {
      instance.VAT = 150;
      expect(instance.VAT).to.equal(150);
    });
    it('get active', () => {
      expect(instance.active).to.equal(true);
    });
    it('set active', () => {
      instance.active = false;
      expect(instance.active).to.be.false;
    });
    it('check toString', () => {
      const output = [
        `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${instance.value}`,
        `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`,
      ];
      const result = output.join('\n');
      expect(instance.toString()).to.equal(result);
    });
  });
  describe('Check arguments', function () {
    it('name argument must be non empty string', () => {
      expect(() => new PaymentPackage('', 12)).to.throw();
      expect(() => new PaymentPackage(12, 12)).to.throw();
      expect(() => new PaymentPackage([12], 12)).to.throw();
    });
    it('change name property with non-string value', () => {
      expect(() => (instance.name = 0)).to.throw();
      expect(() => (instance.name = ['fwe'])).to.throw();
    });
    it('valid name case', () => {
      instance.name = 'Peter';
      expect(instance.name).to.equal('Peter');
    });
    it('value argument must be non negative number', () => {
      expect(() => new PaymentPackage('Name')).to.throw();
      expect(() => new PaymentPackage('Name', '12')).to.throw();
      expect(() => new PaymentPackage('Name', [12])).to.throw();
    });
    it('change value property with non-number value', () => {
      expect(() => (instance.value = '0')).to.throw();
      expect(() => (instance.value = ['fwe'])).to.throw();
    });
    it('valid value case', () => {
      instance.value = 125;
      expect(instance.value).to.equal(125);
    });
    it('change VAT property with non-number value', () => {
      expect(() => (instance.VAT = -1)).to.throw();
      expect(() => (instance.VAT = '121')).to.throw();
      expect(() => (instance.VAT = 'abc')).to.throw();
      expect(() => (instance.VAT = '0')).to.throw();
      expect(() => (instance.VAT = ['fwe'])).to.throw();
    });
    it('valid VAT case', () => {
      instance.VAT = 1;
      expect(instance.VAT).to.equal(1);
    });
    it('change active property with invalid values', () => {
      expect(() => (instance.active = 'foo')).to.throw();
      expect(() => (instance.active = 12)).to.throw();
      expect(() => (instance.active = [12])).to.throw();
    });
    it('change active property with valid values', () => {
      expect(() => (instance.active = false)).to.not.throw();
      expect(() => (instance.active = true)).to.not.throw();
    });
    it('change active property from instance', () => {
      instance.active = false;
      expect(instance.active).to.be.false;
    });
  });
  describe('Overload Tests', function () {
    it('zero or negative name length', () => {
      expect(() => (instance.name.length = 0)).to.throw();
    });
    it('negative value', () => {
      expect(() => (instance.value = -1)).to.throw();
    });
    it('negative VAT', () => {
      expect(() => (instance.VAT = -1)).to.throw();
    });
    it('wrong type of active', () => {
      expect(() => (instance.active = -1)).to.throw();
    });
    it('change values to inactive', () => {
      instance.name = 'Billy';
      instance.value = 155;
      instance.active = false;
      instance.VAT = 40;
      expect(instance.toString()).to.contains('inactive');
      expect(instance.name).to.equal('Billy');
      expect(instance.value).to.equal(155);
      expect(instance.active).to.be.false;
      expect(instance.VAT).to.equal(40);
    });
    it('change values to active', () => {
      instance.name = 'Billy';
      instance.value = 155;
      instance.active = true;
      instance.VAT = 40;
      expect(instance.toString()).to.not.contains('inactive');
      expect(instance.name).to.equal('Billy');
      expect(instance.value).to.equal(155);
      expect(instance.active).to.be.true;
      expect(instance.VAT).to.equal(40);
    });
  });
});
