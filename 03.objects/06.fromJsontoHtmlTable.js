function solve(str) {
  let students = [];
  const obj = JSON.parse(str);
  const heads = Object.keys(obj[0])
    .map((el) => `<th>${escapeHtml(el)}</th>`)
    .join('');

  for (let student of obj) {
    let current = '';
    for (let key of Object.keys(student)) {
      current += `<td>${escapeHtml(student[key])}</td>`;
    }
    students.push(current);
  }
  const studentsData = students.map((el) => `\t<tr>${el}</tr>`);

  console.log(`<table>
\t<tr>${heads}</tr>
${studentsData.join('\n')}
</table>`);

  function escapeHtml(html) {
    return html
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\//g, '&#x2F;');
  }
}

console.log(
  solve(
    `[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]`
  )
);
