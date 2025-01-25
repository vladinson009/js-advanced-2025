function deleteByEmail() {
  const data = Array.from(document.querySelectorAll('tbody tr'));
  const inputField = document.querySelector('input');
  const result = document.getElementById('result');

  const inputValue = inputField.value.toLowerCase();
  for (let user of data) {
    if (user.children[1].textContent.toLowerCase() == inputValue) {
      user.remove();
      return (result.textContent = 'Deleted.');
    }
  }
  result.textContent = 'Not found.';
}
