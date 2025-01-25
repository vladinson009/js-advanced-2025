function solve() {
  const [searchField, searchBtn, rows, result] = [
    document.getElementById('searchField'),
    document.getElementById('searchBtn'),
    document.querySelectorAll('tbody tr'),
    document.getElementById('result'),
  ];
  searchBtn.addEventListener('click', onClick);

  function onClick() {
    Array.from(rows).forEach((el) => {
      if (el.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
        el.classList.add('select');
      } else {
        el.classList.remove('select');
      }
    });
  }
}
