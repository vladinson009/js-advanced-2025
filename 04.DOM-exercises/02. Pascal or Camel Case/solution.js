function solve() {
  const [text, convention, result] = [
    document.getElementById('text').value,
    document.getElementById('naming-convention').value,
    document.getElementById('result'),
  ];
  let output = '';
  const words = text.split(' ');

  if (convention == 'Camel Case') {
    output += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      output += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else if (convention == 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      output += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else {
    output = 'Error!';
  }
  result.textContent = output;
}
