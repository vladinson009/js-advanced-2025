function sumTable() {
  const sum = document.getElementById('sum');
  const trRows = document.querySelectorAll('tr');
  const result = Array.from(trRows)
    .slice(1, -1)
    .reduce((acc, el) => Number(el.children[1].textContent) + acc, 0);
  sum.textContent = result;
}
