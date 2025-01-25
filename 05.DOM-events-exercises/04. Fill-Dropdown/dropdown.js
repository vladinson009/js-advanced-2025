function addItem() {
  const newItemText = document.getElementById('newItemText');
  const newItemValue = document.getElementById('newItemValue');

  const textContent = newItemText.value.trim();
  const value = newItemValue.value.trim();
  if (textContent && value) {
    const option = Object.assign(document.createElement('option'), { textContent, value });

    document.getElementById('menu').appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
  }
}
