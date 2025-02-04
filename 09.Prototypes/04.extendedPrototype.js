function extendedPrototype(classToExtend) {
  classToExtend.prototype.species = 'Human';
  classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}
