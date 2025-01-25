function solve() {
  const [input, output] = [
    document.getElementById('input').value,
    document.getElementById('output'),
  ];

  const sentences = input.split('.').filter((el) => el.length > 0);

  const result = [];
  let counter = 0;
  let temp = '';
  for (let i = 0; i < sentences.length; i++) {
    counter++;
    temp += sentences[i].trim() + '.';
    if (counter % 3 == 0) {
      result.push(`<p>${temp}</p>`);
      temp = '';
    }
  }
  if (temp) {
    result.push(`<p>${temp}</p>`);
  }
  output.innerHTML = result.join('\n');
}
