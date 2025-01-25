function calc() {
  const [firstNumber, secondNumber, sumNumbers] = [
    document.getElementById('num1').value,
    document.getElementById('num2').value,
    document.getElementById('sum'),
  ];
  sumNumbers.value = Number(firstNumber) + Number(secondNumber);
}
