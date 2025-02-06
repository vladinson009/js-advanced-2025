function createComputerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = Number(responseTime);
    }
  }
  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = Number(width);
      this.height = Number(height);
    }
  }
  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = Number(expectedLife);
    }
  }
  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target == Computer) {
        throw new Error('Cannot instantiate abstract class Computer directly.');
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = Number(processorSpeed);
      this.ram = Number(ram);
      this.hardDiskSpace = Number(hardDiskSpace);
    }
  }
  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = Number(weight);
      this.color = color;
      this.isInstance(battery);
      this._battery = battery;
    }
    isInstance(battery) {
      if (battery instanceof Battery == false) {
        throw new TypeError('Battery is not instance of Battery class');
      }
    }
    get battery() {
      this.isInstance(this._battery);
      return this._battery;
    }
    set battery(value) {
      this.isInstance(value);
      this._battery = value;
    }
  }
  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.isKeyboard(keyboard);
      this.isMonitor(monitor);
      this._keyboard = keyboard;
      this._monitor = monitor;
    }
    isKeyboard(keyboard) {
      if (keyboard instanceof Keyboard == false) {
        throw new TypeError('Keyboard is not an instance of Keyboard!');
      }
    }
    isMonitor(monitor) {
      if (monitor instanceof Monitor == false) {
        throw new TypeError('Monitor is not an instance of Monitor!');
      }
    }
    get keyboard() {
      this.isKeyboard(this._keyboard);
      return this._keyboard;
    }
    set keyboard(value) {
      this.isKeyboard(value);
      this._keyboard = value;
    }
    get monitor() {
      this.isMonitor(this._monitor);
      return this._monitor;
    }
    set monitor(value) {
      this.isMonitor(value);
      this._monitor = value;
    }
  }

  return {
    Keyboard,
    Monitor,
    Battery,
    Computer,
    Laptop,
    Desktop,
  };
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop('Hewlett Packard', 2.4, 4, 0.5, 3.12, 'Silver', battery);
console.log(laptop);
