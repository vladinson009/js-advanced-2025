import { expect } from 'chai';
import { StringBuilder } from './stringBuilder.js';

describe('Test functionality', function () {
  let instance;
  beforeEach(() => (instance = new StringBuilder('string')));

  describe('Happy Path', function () {
    it('Initialize with or without arguments', () => {
      expect(() => new StringBuilder('str')).to.not.throw();
      expect(() => new StringBuilder()).to.not.throw();
    });
    it('test append method', () => {
      instance.append('one');
      expect(instance.toString()).to.equal('stringone');
    });
    it('test prepend method', () => {
      instance.prepend('one');
      expect(instance.toString()).to.equal('onestring');
    });
    it('test insertAt method', () => {
      instance.insertAt('one', 2);
      expect(instance.toString()).to.equal('stonering');
    });
    it('test remove method', () => {
      instance.remove(2, 2);
      expect(instance.toString()).to.equal('stng');
    });
    it('test toString method', () => {
      instance.append('append');
      instance.prepend('prepend');
      instance.insertAt('1', 1);
      instance.remove(5, 1);
      expect(instance.toString()).to.equal('p1repndstringappend');
    });
    it('toString works correctly', () => {
      const expected = '\n A \n\r B\t123   ';
      const emptyString = new StringBuilder();
      expected.split('').forEach((s) => {
        emptyString.append(s);
        emptyString.prepend(s);
      });
      emptyString.insertAt('test', 4);
      emptyString.remove(2, 4);
      expect(emptyString.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
    });
  });

  describe('Wrong or no arguments', function () {
    it('invalid append argument', () => {
      expect(() => instance.append(1)).to.throw();
      expect(() => instance.append()).to.throw();
    });
    it('invalid prepend argument', () => {
      expect(() => instance.prepend(1)).to.throw();
      expect(() => instance.prepend()).to.throw();
    });
    it('invalid insertAt argument', () => {
      expect(() => instance.insertAt(1, 1)).to.throw();
      expect(() => instance.insertAt()).to.throw();
    });
  });
});
