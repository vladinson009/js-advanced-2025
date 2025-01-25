function addItem() {
  const items = document.getElementById('items');
  const value = document.getElementById('newItemText').value;

  const newItem = Object.assign(document.createElement('li'), {
    textContent: value,
  });

  items.appendChild(newItem);
}
