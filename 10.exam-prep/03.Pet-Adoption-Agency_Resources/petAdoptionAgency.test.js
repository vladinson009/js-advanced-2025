import petAdoptionAgency from './petAdoptionAgency.js';
import { expect } from 'chai';

describe('Main Describe', function () {
  let instance;
  beforeEach(() => (instance = petAdoptionAgency));
  describe('isPetAvailable method', function () {
    describe('Happy path', function () {
      it('When pet is vaccinated', () => {
        expect(instance.isPetAvailable('George', 1, true)).to.equal(
          `Great! We have 1 vaccinated George(s) available for adoption at the agency.`
        );
      });
      it('When pet is not vaccinated', () => {
        expect(instance.isPetAvailable('George', 2, false)).to.equal(
          `Great! We have 2 George(s) available for adoption, but they need vaccination.`
        );
      });
    });
    describe('Validate input', function () {
      it('invalid pet', () => {
        expect(() => instance.isPetAvailable([], 4, true)).to.throw('Invalid input');
        expect(() => instance.isPetAvailable(12, 4, true)).to.throw('Invalid input');
        expect(() => instance.isPetAvailable(false, 4, true)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable({}, 4, true)).to.throw('Invalid input');
        expect(() => instance.isPetAvailable(['asd'], 4, true)).to.throw(
          'Invalid input'
        );
      });
      it('invalid count', () => {
        expect(() => instance.isPetAvailable('Cat', '4', true)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', '-4', true)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', {}, true)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', [], true)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', true, true)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', '', true)).to.throw(
          'Invalid input'
        );
      });
      it('invalid vaccinated status', () => {
        expect(() => instance.isPetAvailable('Cat', 1, [])).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', 2, 12)).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', 3, 'true')).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', 4, { true: 1 })).to.throw(
          'Invalid input'
        );
        expect(() => instance.isPetAvailable('Cat', 5, () => 1)).to.throw(
          'Invalid input'
        );
      });
    });
    describe('Edge cases', function () {
      it('zero or negative available count', () => {
        expect(instance.isPetAvailable('George', 0, true)).to.equal(
          'Sorry, there are no George(s) available for adoption at the agency.'
        );
        expect(instance.isPetAvailable('George', 0, false)).to.equal(
          'Sorry, there are no George(s) available for adoption at the agency.'
        );
        expect(instance.isPetAvailable('George', -1, false)).to.equal(
          'Sorry, there are no George(s) available for adoption at the agency.'
        );
        expect(instance.isPetAvailable('George', -1, true)).to.equal(
          'Sorry, there are no George(s) available for adoption at the agency.'
        );
      });
    });
  });
  describe('getRecommendedPets method', function () {
    describe('Happy path', function () {
      it('Valid parameters', () => {
        expect(
          instance.getRecommendedPets(
            [
              { name: 'George', traits: 'Cat' },
              { name: 'Simon', traits: 'Cat' },
            ],
            'Cat'
          )
        ).to.equal('Recommended pets with the desired traits (Cat): George, Simon');
        expect(
          instance.getRecommendedPets(
            [
              { name: 'George', traits: 'Cat' },
              { name: 'Simon', traits: 'Cat' },
            ],
            'Dog'
          )
        ).to.equal(
          'Sorry, we currently have no recommended pets with the desired traits: Dog.'
        );
      });
    });
    describe('Validate input', function () {
      it('Invalid first parameter', () => {
        expect(() => instance.getRecommendedPets('Cats', 'Cat')).to.throw(
          'Invalid input'
        );
        expect(() =>
          instance.getRecommendedPets({ Dogecoin: true }, 'Cat')
        ).to.throw('Invalid input');
        expect(() => instance.getRecommendedPets(12, 'Cat')).to.throw(
          'Invalid input'
        );
        expect(() => instance.getRecommendedPets(true, 'Cat')).to.throw(
          'Invalid input'
        );
      });
      it('Invalid second parameter', () => {
        expect(() =>
          instance.getRecommendedPets(
            [
              { name: 'George', traits: 'Cat' },
              { name: 'Simon', traits: 'Cat' },
            ],
            12
          )
        ).to.throw('Invalid input');

        expect(() =>
          instance.getRecommendedPets(
            [
              { name: 'George', traits: 'Cat' },
              { name: 'Simon', traits: 'Cat' },
            ],
            true
          )
        ).to.throw('Invalid input');
        expect(() =>
          instance.getRecommendedPets(
            [
              { name: 'George', traits: 'Cat' },
              { name: 'Simon', traits: 'Cat' },
            ],
            Boolean
          )
        ).to.throw('Invalid input');
        expect(() =>
          instance.getRecommendedPets(
            [
              { name: 'George', traits: 'Cat' },
              { name: 'Simon', traits: 'Cat' },
            ],
            null
          )
        ).to.throw('Invalid input');
      });
    });
  });
  describe('adoptPet method', function () {
    describe('Happy path', function () {
      it('Valid parameters', () => {
        expect(instance.adoptPet('George', 'Vladimir')).to.equal(
          'Congratulations, Vladimir! You have adopted George from the agency. Enjoy your time with your new furry friend!'
        );
      });
    });
    describe('Invalid parameters', function () {
      it('first parameter', () => {
        expect(() => instance.adoptPet(12, 'Vladimir')).to.throw('Invalid input');
      });
      it('second parameter', () => {
        expect(() => instance.adoptPet('George', 12)).to.throw('Invalid input');
      });
      it('both parameters', () => {
        expect(() => instance.adoptPet(12, { value: true })).to.throw(
          'Invalid input'
        );
      });
      it('no parameters', () => {
        expect(() => instance.adoptPet()).to.throw('Invalid input');
      });
    });
  });
});
