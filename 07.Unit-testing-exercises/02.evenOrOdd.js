import { expect } from 'chai';

describe('Main describe', () => {
  describe('Check for non-string input', () => {
    it('no argument', () => {
      expect(isOddOrEven()).to.be.undefined;
    });
    it('array argument', () => {
      expect(isOddOrEven(['123'])).to.be.undefined;
    });
    it('number argument', () => {
      expect(isOddOrEven(12)).to.be.undefined;
    });
  });
  describe('Check for string input', () => {
    it('must be even', () => {
      expect(isOddOrEven('abba')).to.equal('even');
    });
    it('must be odd', () => {
      expect(isOddOrEven('abb')).to.equal('odd');
    });
    it('must be odd', () => {
      expect(isOddOrEven('abb ds ad')).to.equal('odd');
    });
  });
});

function isOddOrEven(string) {
  if (typeof string !== 'string') {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
