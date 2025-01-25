function validate() {
  document.getElementById('email').addEventListener('change', onChange);
  function onChange(e) {
    const target = e.target;
    const value = target.value;
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    if (pattern.test(value)) {
      target.classList.remove('error');
    } else {
      target.classList.add('error');
    }
  }
}
