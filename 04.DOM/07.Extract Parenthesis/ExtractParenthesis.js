function extract(content) {
  const text = document.getElementById(content).textContent;

  const pattern = /\(([\w ]+)+\)/gm;
  const matches = [...text.matchAll(pattern)].map((el) => el[1]);

  return matches.join('; ');
}
