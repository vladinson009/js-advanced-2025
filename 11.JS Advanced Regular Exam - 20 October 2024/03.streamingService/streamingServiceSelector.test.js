import { expect } from 'chai';
import streamingServiceSelector from './streamingServiceSelector.js';

describe('Main describe', function () {
  let instance;

  beforeEach(() => (instance = streamingServiceSelector));

  describe('selectingContent method', function () {
    const supportedGenre = [
      'Action',
      'Comedy',
      'Drama',
      'Thriller',
      'Horror',
      'Romance',
      'Sci-Fi',
    ];
    it('throw error if genre is not supported', () => {
      let genre = 'Cla';
      expect(genre).to.not.includes(supportedGenre);
      expect(() => instance.selectingContent('Movie', 'Netflix', genre)).to.throw(
        'We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.'
      );
    });
    it('throw error if type is different than Movie or TV Show', () => {
      expect(() => instance.selectingContent('Film', 'Netflix', 'Comedy')).to.throw(
        `We currently only support 'Movie' or 'TV Show' types.`
      );
      expect(() =>
        instance.selectingContent('Movie', 'Netflix', 'Comedy')
      ).to.not.throw(`We currently only support 'Movie' or 'TV Show' types.`);
      expect(() =>
        instance.selectingContent('TV Show', 'Netflix', 'Comedy')
      ).to.not.throw(`We currently only support 'Movie' or 'TV Show' types.`);
    });
    it('if all inputs are valid', () => {
      expect(instance.selectingContent('Movie', 'Netflix', 'Comedy')).to.equal(
        'You can watch this Comedy Movie on Netflix. Enjoy your Comedy-filled experience!'
      );
    });
  });
  describe('availablePlatforms method', function () {
    it('Happy path', () => {
      expect(instance.availablePlatforms(['Netflix', 'HBO', 'Disney+'], 0)).to.equal(
        'Other available platforms are: HBO, Disney+.'
      );
    });
    it('Invalid index -1', () => {
      expect(() =>
        instance.availablePlatforms(['Netflix', 'HBO', 'Disney+'], -1)
      ).to.throw('Invalid platform selection.');
    });
    it('Invalid index out of bound', () => {
      expect(() =>
        instance.availablePlatforms(['Netflix', 'HBO', 'Disney+'], 3)
      ).to.throw('Invalid platform selection.');
    });
    it('Invalid non number index', () => {
      expect(() =>
        instance.availablePlatforms(['Netflix', 'HBO', 'Disney+'], '3')
      ).to.throw('Invalid platform selection.');
    });
    it('Invalid first parameter', () => {
      expect(() => instance.availablePlatforms('Netflix', 0)).to.throw(
        'Invalid platform selection.'
      );
    });
    it('TODO', () => {});
    it('TODO', () => {});
  });
  describe('contentRating method', function () {
    it('Happy path', () => {
      expect(instance.contentRating(30, 7)).to.equal(
        'This content is highly rated (7/10) and has a runtime of 0.50 hours. Enjoy your watch!'
      );
      expect(instance.contentRating(45, 2)).to.equal(
        'This content has a lower rating (2/10) and runs for 0.75 hours. You might want to check reviews first.'
      );
    });
    it('invalid first argument', () => {
      expect(() => instance.contentRating('12', 6)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => instance.contentRating(-2, 6)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => instance.contentRating('asd', 6)).to.throw(
        'Invalid runtime or rating.'
      );
    });
    it('invalid second argument', () => {
      expect(() => instance.contentRating(30, -1)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => instance.contentRating(30, 11)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => instance.contentRating(30, '-1')).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => instance.contentRating(30, 'asd')).to.throw(
        'Invalid runtime or rating.'
      );
    });
  });
});
