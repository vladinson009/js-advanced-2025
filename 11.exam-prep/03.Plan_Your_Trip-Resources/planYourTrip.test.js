import planYourTrip from './planYourTrip.js';
import { expect } from 'chai';

describe('Main describe', function () {
  let instance;
  beforeEach(() => (instance = planYourTrip));
  describe('choosingDestination', function () {
    it('Invalid year', () => {
      expect(() =>
        instance.choosingDestination('Ski Resort', 'Winter', 2025)
      ).to.throw('Invalid Year!');
    });
    it('Invalid destinatioin', () => {
      expect(() => instance.choosingDestination('Surf', 'Spring', 2024)).to.throw(
        'This destination is not what you are looking for.'
      );
    });
    it('Happy Path', () => {
      expect(instance.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal(
        'Great choice! The Winter is the perfect time to visit the Ski Resort.'
      );
      expect(instance.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(
        'Consider visiting during the Winter for the best experience at the Ski Resort.'
      );
    });
  });
  describe('exploreOptions', function () {
    it('remove element from an array', () => {
      expect(
        instance.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 2)
      ).to.equal('Skiing, Snowboarding');
    });
    it('Invalid Information', () => {
      expect(() => instance.exploreOptions(15, 'str')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.exploreOptions('15', 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.exploreOptions(['Biking', 'Skiing'], -1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.exploreOptions(['Biking', 'Skiing'], 2)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.exploreOptions(['Biking', 'Skiing'], 'str')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.exploreOptions(['Biking', 'Skiing'], 2.5)).to.throw(
        'Invalid Information!'
      );
    });
  });
  describe('estimateExpenses', function () {
    it('Happy Path with less than 500$ budget', () => {
      expect(instance.estimateExpenses(12, 10)).to.equal(
        'The trip is budget-friendly, estimated cost is $120.00.'
      );
      expect(instance.estimateExpenses(50, 10)).to.equal(
        'The trip is budget-friendly, estimated cost is $500.00.'
      );
    });
    it('Happy Path with more than 500$ budget', () => {
      expect(instance.estimateExpenses(70, 10)).to.equal(
        'The estimated cost for the trip is $700.00, plan accordingly.'
      );
      expect(instance.estimateExpenses(60, 10)).to.equal(
        'The estimated cost for the trip is $600.00, plan accordingly.'
      );
    });
    it('Check inputs', () => {
      expect(() => instance.estimateExpenses('asd', 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses(0, 1)).to.throw('Invalid Information!');
      expect(() => instance.estimateExpenses(-1, 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses('0', 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses([1], 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses(1, 'asd')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses(1, 0)).to.throw('Invalid Information!');
      expect(() => instance.estimateExpenses(1, -1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses(1, '0')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.estimateExpenses(1, [1])).to.throw(
        'Invalid Information!'
      );
    });
  });
});
