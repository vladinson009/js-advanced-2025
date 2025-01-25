function solve() {
  const inputField = document.getElementById('input');
  const selectMenuTo = document.getElementById('selectMenuTo');
  const result = document.getElementById('result');
  const fragment = document.createDocumentFragment();
  document.querySelector('button').addEventListener('click', onClick);

  const formats = {
    binary: 2,
    hexadecimal: 16,
  };

  for (let value in formats) {
    const textContent = value.at(0).toUpperCase() + value.slice(1);
    const currentOption = Object.assign(document.createElement('option'), {
      textContent,
      value,
    });
    fragment.appendChild(currentOption);
  }

  selectMenuTo.appendChild(fragment);

  function onClick() {
    const inputNumber = Number(inputField.value);
    const format = selectMenuTo.value;
    if (formats[format]) {
      result.value = inputNumber.toString(formats[format]).toUpperCase();
    }
  }
}
