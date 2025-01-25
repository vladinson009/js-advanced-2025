function toggle() {
  const btnText = document.querySelector('.button');
  const content = document.getElementById('extra');

  if (btnText.textContent == 'More') {
    content.style.display = 'block';
    btnText.textContent = 'Less';
  } else {
    content.style.display = 'none';
    btnText.textContent = 'More';
  }
}
