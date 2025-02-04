function classHierarchy() {
  class Figure {
    constructor(units = 'cm') {
      this.units = units;
    }
    // getter
    get area() {
      return this.area;
    }
    // methods
    changeUnits(value) {
      this.units = value;
    }
    toString() {
      return `Figures units: ${this.units}`;
    }
    convertUnits(value) {
      if (this.units == 'mm') {
        value *= 10;
      } else if (this.units == 'm') {
        value /= 10;
      }
      return value;
    }
  }
  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this._radius = Number(radius);
    }
    // radius getter
    get radius() {
      return this.convertUnits(this._radius);
    }
    //area getter
    get area() {
      return Math.PI * this.radius * this.radius;
    }
    // overrides method toString
    toString() {
      return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
    }
  }
  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = Number(width);
      this._height = Number(height);
    }
    // getters
    get width() {
      return this.convertUnits(this._width);
    }
    get height() {
      return this.convertUnits(this._height);
    }
    get area() {
      return this.width * this.height;
    }
    // methods
    toString() {
      return (
        super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`
      );
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}
