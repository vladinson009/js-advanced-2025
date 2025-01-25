import { expect } from 'chai';
describe('Check array', () => {
  it('should be equal', () => {
    expect(sum([1, 2, 3])).to.be.equal(6);
  });
  it('should not be equal', () => {
    expect(sum([1, 1, 1])).to.not.be.equal(4);
  });
  it('should be undefined', () => {
    expect(sum([])).to.be.equal(0);
  });
});

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}
