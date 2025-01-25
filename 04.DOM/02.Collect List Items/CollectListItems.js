function extractText() {
  const items = document.getElementById('items').children;
  const result = document.getElementById('result');

  const array = Array.from(items).map((el) => el.textContent);
  result.textContent = array.join('\n');
}
