function generateReport() {
  const output = document.getElementById('output');
  const selectFields = document.querySelectorAll('tr th input');
  const dataList = document.querySelectorAll('tbody tr');
  const result = [];

  for (let i = 0; i < dataList.length; i++) {
    const currentData = {};

    for (let j = 0; j < selectFields.length; j++) {
      const checkboxInput = selectFields[j];
      const currentCheckboxTitle = checkboxInput.name;
      const currentColumnText = dataList[i].children[j].textContent;

      if (checkboxInput.checked) {
        currentData[currentCheckboxTitle] = currentColumnText;
      }
    }
    result.push(currentData);
  }
  output.textContent = JSON.stringify(result);
}
