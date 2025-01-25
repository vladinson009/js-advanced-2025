function addItem() {
  const items = document.getElementById('items');
  const value = document.getElementById('newItemText').value;

  const newItem = Object.assign(document.createElement('li'), {
    textContent: value,
  });

  const deleteBtn = Object.assign(document.createElement('a'), {
    href: '#',
    textContent: '[Delete]',
    onclick: (e) => e.target.parentElement.remove(),
  });

  newItem.appendChild(deleteBtn);
  items.appendChild(newItem);
}
