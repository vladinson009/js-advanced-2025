import { expect } from 'chai';
import homeGardener from './homeGardener.js';

describe('Main describe', function () {
  let instance;
  beforeEach(() => (instance = homeGardener));

  describe('plantCareInstructions(plantType)', function () {
    it('if type is succulent', () => {
      expect(instance.plantCareInstructions('succulent')).to.equal(
        'Succulents require minimal watering, indirect sunlight, and well-draining soil.'
      );
    });
    it('if type is vegetable', () => {
      expect(instance.plantCareInstructions('vegetable')).to.equal(
        'Vegetables need full sun, regular watering, and nutrient-rich soil.'
      );
    });
    it('if type is flowering', () => {
      expect(instance.plantCareInstructions('flowering')).to.equal(
        'Flowering plants require moderate watering, occasional fertilization, and pruning.'
      );
    });
    it('if type is tree', () => {
      expect(instance.plantCareInstructions('tree')).to.equal(
        'Trees need deep watering, proper spacing, and regular mulching.'
      );
    });
    it('if type is different', () => {
      expect(() => instance.plantCareInstructions('a')).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions('123')).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions(123)).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions([1])).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions(undefined)).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions({})).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions(true)).to.throw(
        'Invalid plant type!'
      );
      expect(() => instance.plantCareInstructions()).to.throw('Invalid plant type!');
    });
  });
  describe('availablePlants(plantSizes, maxHeight)', function () {
    it('if plants are less or equal height', () => {
      expect(instance.availablePlants([3, 4, 5, 6], 3)).to.equal(
        'There are 1 plants suitable for your garden height criteria!'
      );
      expect(instance.availablePlants([1, 3, 4, 5, 6], 3)).to.equal(
        'There are 2 plants suitable for your garden height criteria!'
      );
    });
    it('check invalid input', () => {
      expect(() => instance.availablePlants([], 1)).to.throw('Invalid Information!');
      expect(() => instance.availablePlants([1, 2, 3], 0)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([1, 2, 3], -1)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([], '1')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([], 'asd')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([], [])).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([])).to.throw('Invalid Information!');
      expect(() => instance.availablePlants([], true)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([], undefined)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants([], NaN)).to.throw(
        'Invalid Information!'
      );
      // invalid first argument:
      expect(() => instance.availablePlants('5', 5)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants('asd', 5)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants(5, 5)).to.throw('Invalid Information!');
      expect(() => instance.availablePlants()).to.throw('Invalid Information!');
      expect(() => instance.availablePlants(NaN, 5)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.availablePlants({}, 5)).to.throw('Invalid Information!');
      expect(() => instance.availablePlants(true, 5)).to.throw(
        'Invalid Information!'
      );
    });
  });
  describe('gardenExpenses (tools, seeds, discount)', function () {
    it('check inputs', () => {
      expect(() => instance.gardenExpenses([1], [1], undefined)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.gardenExpenses(12, [1], true)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.gardenExpenses([1], 12, false)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.gardenExpenses('1', '1', '1')).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.gardenExpenses(0, 0, 0)).to.throw(
        'Invalid Information!'
      );
      expect(() => instance.gardenExpenses()).to.throw('Invalid Information!');
    });
    it('Happy Path', () => {
      expect(
        instance.gardenExpenses(['shovel', 'rake'], ['flower seeds'], false)
      ).to.equal('You spent $48.00 on tools and seeds!');
      expect(
        instance.gardenExpenses(
          ['shovel', 'rake', 'watering can'],
          ['vegetable seeds', 'flower seeds', 'herb seeds'],
          false
        )
      ).to.equal('You spent $66.00 on tools and seeds!');
      expect(
        instance.gardenExpenses(
          ['shovel', 'rake', 'watering can'],
          ['vegetable seeds', 'flower seeds', 'herb seeds'],
          true
        )
      ).to.equal('You spent $59.40 on tools and seeds with a 10% discount!');
      expect(
        instance.gardenExpenses(
          ['shovel', 'rake'],
          ['vegetable seeds', 'vegetable seeds'],
          true
        )
      ).to.equal('You spent $45.00 on tools and seeds with a 10% discount!');
    });
  });
});
