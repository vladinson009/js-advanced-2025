function solve() {
  return {
    extend(templates) {
      for (let template in templates) {
        typeof templates[template] == 'function'
          ? (Object.getPrototypeOf(this)[template] = templates[template])
          : (this[template] = templates[template]);
      }
    },
  };
}
