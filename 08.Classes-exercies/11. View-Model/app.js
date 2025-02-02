class Textbox {
  _elements;
  _invalidSymbols;
  _value;
  constructor(selector, regex) {
    this._elements = document.querySelectorAll(selector);
    this._invalidSymbols = regex;
    this._bindEvents();
  }
  get value() {
    return this._value;
  }
  set value(value) {
    Array.from(this._elements).forEach((el) => (el.value = value));
    this._value = value;
  }
  get elements() {
    return this._elements;
  }
  isValid() {
    return !Array.from(this._elements).some((el) => this._invalidSymbols.test(el.value));
  }
  // ! _bindEvents
  // iterate selected elements and add event listener on Input
  // - input listener -> typed value = _value value
  // - all elements values = _value value
  _bindEvents() {
    for (const element of this._elements) {
      element.addEventListener('input', (e) => {
        this._value = element.value;
        for (const element of this._elements) {
          element.value = this._value;
        }
      });
    }
  }
}
let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () {
  console.log(textbox.value);
});
