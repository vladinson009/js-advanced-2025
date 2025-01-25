function subtract() {
  const [firstNum, secondNum, result] = [
    document.getElementById('firstNumber').value,
    document.getElementById('secondNumber').value,
    document.getElementById('result'),
  ];

  result.textContent = Number(firstNum) - Number(secondNum);
}
