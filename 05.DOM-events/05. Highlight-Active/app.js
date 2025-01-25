function focused() {
  const fields = document.getElementsByTagName('input');

  for (let field of fields) {
    field.addEventListener('focus', onFocus);
    field.addEventListener('blur', onBlur);
  }

  function onFocus(ev) {
    ev.target.parentElement.className = 'focused';
  }

  function onBlur(ev) {
    ev.target.parentElement.className = 'blured';
  }
}
