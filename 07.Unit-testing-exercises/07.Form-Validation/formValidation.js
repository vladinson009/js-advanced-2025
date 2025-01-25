function validate() {
  const form = document.getElementById('registerForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const rePass = document.getElementById('confirm-password');

  const companyCheckbox = document.getElementById('company');
  const companyInfoHiddenField = document.getElementById('companyInfo');
  const companyNumber = document.getElementById('companyNumber');
  const validDiv = document.getElementById('valid');

  companyCheckbox.checked = false;
  form.addEventListener('submit', onSubmit);
  companyCheckbox.addEventListener('change', onCheckbox);

  const isValidUsername = /^[a-zA-Z0-9]{3,20}$/;
  const isValidPassword = /^[_a-zA-Z0-9]{5,15}$/;
  const isValidEmail = /^[\w_]+@[\w\.]*\.[\w\.]*$/;

  function onSubmit(e) {
    e.preventDefault();
    let isValid = true;
    const isChecked = companyCheckbox.checked;
    if (!isValidUsername.test(username.value)) {
      username.style.borderColor = 'red';
      isValid = false;
    } else {
      username.style.borderColor = '';
    }
    if (isValidPassword.test(password.value) && password.value == rePass.value) {
      password.style.borderColor = '';
      rePass.style.borderColor = '';
    } else {
      password.style.borderColor = 'red';
      rePass.style.borderColor = 'red';
      isValid = false;
    }
    if (!email.value || !isValidEmail.test(email.value)) {
      email.style.borderColor = 'red';
      isValid = false;
    } else {
      email.style.borderColor = '';
    }
    if (
      isChecked &&
      (typeof Number(companyNumber.value) != 'number' ||
        Number(companyNumber.value) < 1000 ||
        Number(companyNumber.value) > 9999)
    ) {
      companyNumber.style.borderColor = 'red';
      isValid = false;
    } else {
      companyNumber.style.borderColor = '';
    }
    if (isValid) {
      validDiv.style.display = 'block';
    } else {
      validDiv.style.display = 'none';
    }
  }
  function onCheckbox(e) {
    e.target.checked
      ? (companyInfoHiddenField.style.display = 'block')
      : (companyInfoHiddenField.style.display = 'none');
  }
}
