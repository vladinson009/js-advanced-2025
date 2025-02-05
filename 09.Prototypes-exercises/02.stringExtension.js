(function stringExstension() {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString();
    }
    return str + this;
  };
  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString();
    }
    return this + str;
  };
  String.prototype.isEmpty = function () {
    return this.length < 1 ? true : false;
  };
  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }
    if (n < 4) {
      return '.'.repeat(n);
    }
    const isSpaceOccur = this.slice(0, n - 2).lastIndexOf(' ');
    if (isSpaceOccur != -1) {
      return this.slice(0, isSpaceOccur) + '...';
    }
    return this.slice(0, n - 3) + '...';
  };
  String.format = function (string, ...params) {
    for (word of params) {
      string = string.replace(/{\d+}/, word);
    }
    return string;
  };
  // let str = 'my string';
  // console.log((str = str.ensureStart('my')));
  // console.log((str = str.ensureStart('hello ')));
  // console.log((str = str.truncate(16)));
  // console.log((str = str.truncate(14)));
  // console.log((str = str.truncate(8)));
  // console.log((str = str.truncate(4)));
  // console.log((str = str.truncate(2)));
  // console.log((str = String.format('The {0} {1} fox', 'quick', 'brown')));
  // console.log((str = String.format('jumps {0} {1}', 'dog')));
})();
