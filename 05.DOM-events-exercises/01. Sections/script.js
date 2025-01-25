function create(words) {
  const content = document.getElementById('content');
  content.addEventListener('click', onClick);

  for (let word of words) {
    const newSection = document.createElement('div');
    const p = Object.assign(document.createElement('p'), {
      textContent: word,
    });
    p.style.display = 'none';
    newSection.appendChild(p);
    content.appendChild(newSection);
  }

  function onClick(e) {
    if (e.target.tagName == 'DIV') {
      e.target.children[0].style.display = 'block';
    }
  }
}
