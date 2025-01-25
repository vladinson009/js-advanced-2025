function calculator() {
  let selector1, selector2, resultSelector;

  return {
    init(s1, s2, result) {
      selector1 = document.querySelector(s1);
      selector2 = document.querySelector(s2);
      resultSelector = document.querySelector(result);
    },
    add() {
      const value1 = Number(selector1.value);
      const value2 = Number(selector2.value);
      resultSelector.value = value1 + value2;
    },
    subtract() {
      const value1 = Number(selector1.value);
      const value2 = Number(selector2.value);
      resultSelector.value = value1 - value2;
    },
  };
}
