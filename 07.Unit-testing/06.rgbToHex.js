import { expect } from 'chai';

describe('Color checker', () => {
  describe('check for valid arguments', () => {
    it('object as an argument', () => {
      expect(rgbToHexColor({ 23: 23, 24: 24, 25: 25 })).to.be.undefined;
    });
    it('array as an argument', () => {
      expect(rgbToHexColor([25, 25, 25])).to.be.undefined;
    });
    it('string as arguments', () => {
      expect(rgbToHexColor('2a', 'as2', 'ds2')).to.be.undefined;
    });
    it('mixed arguments', () => {
      expect(rgbToHexColor('2a', ['as2'], 'ds2')).to.be.undefined;
    });
    it('string as arguments', () => {
      expect(rgbToHexColor('2', 255, 1)).to.be.undefined;
    });
  });
  describe('check for 3 arguments', () => {
    it('0 arguments', () => {
      expect(rgbToHexColor()).to.be.undefined;
    });
    it('1 arguments', () => {
      expect(rgbToHexColor(12)).to.be.undefined;
    });
    it('2 arguments', () => {
      expect(rgbToHexColor(24, 25)).to.be.undefined;
    });
  });
  describe('check for arguments in range', () => {
    it('over range', () => {
      expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });
    it('under range', () => {
      expect(rgbToHexColor(-5, 255, 3)).to.be.undefined;
    });
    it('out of range', () => {
      expect(rgbToHexColor(-5, 258, 3)).to.be.undefined;
    });
  });
  describe('return right color in hexadecimal format', () => {
    it('should return #FFFFFF', () => {
      expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('should return #171717', () => {
      expect(rgbToHexColor(23, 23, 23)).to.equal('#171717');
    });
    it('should return #000000', () => {
      expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
  });
});

function rgbToHexColor(red, green, blue) {
  // Validate red value
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }

  // Validate green value
  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }

  // Validate blue value
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }

  // Convert to hexadecimal and return
  return (
    '#' +
    ('0' + red.toString(16).toUpperCase()).slice(-2) +
    ('0' + green.toString(16).toUpperCase()).slice(-2) +
    ('0' + blue.toString(16).toUpperCase()).slice(-2)
  );
}
