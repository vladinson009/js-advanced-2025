function search() {
  const [towns, searchText, result] = [
    document.getElementById('towns').children,
    document.getElementById('searchText').value,
    document.getElementById('result'),
  ];
  let matches = 0;
  Array.from(towns).forEach((el) => {
    if (el.textContent.toLowerCase().includes(searchText.toLowerCase())) {
      el.style.textDecoration = 'underline';
      el.style.fontWeight = 'bold';
      matches++;
    } else {
      el.style.textDecoration = 'none';
      el.style.fontWeight = 'normal';
    }
  });
  result.textContent = `${matches} matches found`;
}
