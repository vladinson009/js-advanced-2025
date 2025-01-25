import { expect } from 'chai';

describe('Main describe', () => {
  describe('check if any arguments', () => {
    it('without argument should be undefined', () => {
      expect(lookupChar()).to.be.undefined;
    });
    it('with only one argument should be undefined', () => {
      expect(lookupChar('ala-bala')).to.be.undefined;
    });
  });
  describe('check for arguments type', () => {
    it('check for first argument', () => {
      expect(lookupChar(1, 1)).to.be.undefined;
    });
    it('check for first argument', () => {
      expect(lookupChar('ala-bala', 1.7)).to.be.undefined;
    });
    it('check for second argument', () => {
      expect(lookupChar('asd', 'd2')).to.be.undefined;
    });
  });
  describe('check for incorrect index', () => {
    it('equal to string length index', () => {
      expect(lookupChar('asd', 3)).to.be.equal('Incorrect index');
    });
    it('negative index', () => {
      expect(lookupChar('asd', -1)).to.be.equal('Incorrect index');
    });
    it('out of bound index', () => {
      expect(lookupChar('asd', 15)).to.be.equal('Incorrect index');
    });
  });
  describe('check for correct output', () => {
    it('expect to get last char', () => {
      expect(lookupChar('what', 3)).to.equal('t');
    });
    it('expect to get first char', () => {
      expect(lookupChar('what', 0)).to.equal('w');
    });
  });
});

function lookupChar(string, index) {
  if (typeof string !== 'string' || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return 'Incorrect index';
  }
  return string.charAt(index);
}
