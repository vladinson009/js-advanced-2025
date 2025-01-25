function colorize() {
  const tableChildren = document.querySelectorAll('tr:nth-child(2n)');
  Array.from(tableChildren).forEach((el) => (el.style.backgroundColor = 'Teal'));
}
