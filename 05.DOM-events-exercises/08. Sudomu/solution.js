function solve() {
  const rows = document.querySelectorAll('tbody tr');
  const table = document.querySelector('table');
  const p = document.querySelector('#check p');
  const minInputValue = Number(document.querySelector('input').getAttribute('min'));
  const maxInputValue = Number(document.querySelector('input').getAttribute('max'));

  const checkResult = '123';
  const [quickCheckBtn, clearBtn] = document.querySelectorAll('tfoot button');
  quickCheckBtn.addEventListener('click', quickCheck);
  clearBtn.addEventListener('click', clear);

  /////////////////// FUNCTION Quick Check ///////////////////
  function quickCheck() {
    let isWinner = true;

    for (let i = 0; i < rows.length; i++) {
      const vResult = [];
      const hResult = [];
      for (let j = 0; j < rows.length; j++) {
        const vertical = rows[j].children[i].children[0];
        const horizontal = rows[i].children[j].children[0];

        if (
          vertical.value >= minInputValue &&
          vertical.value <= maxInputValue &&
          horizontal.value >= minInputValue &&
          horizontal.value <= maxInputValue
        ) {
          vResult.push(Number(vertical.value));
          hResult.push(Number(horizontal.value));
        }
      }
      const resultA = vResult.sort((a, b) => a - b).join('');
      const resultB = hResult.sort((a, b) => a - b).join('');
      if (resultA != checkResult || resultB != checkResult) {
        isWinner = false;
        break;
      }
    }
    if (isWinner) {
      table.style.border = '2px solid green';
      p.textContent = 'You solve it! Congratulations!';
      p.style.color = 'green';
    } else {
      table.style.border = '2px solid red';
      p.textContent = 'NOP! You are not done yet...';
      p.style.color = 'red';
    }
  }
  /////////////////// FUNCTION CLEAR ///////////////////
  function clear() {
    table.style.border = '';
    p.textContent = '';
    p.style.color = '';
    const inputs = document.querySelectorAll('input');
    inputs.forEach((el) => (el.value = ''));
  }
}
