function solve() {
  const sections = document.querySelectorAll('section');
  const resultUl = document.getElementById('results');
  const outputH1 = resultUl.querySelector('li > h1');

  document.body.addEventListener('click', onClick);

  const answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let rightAnswers = 0;
  let idx = 0;

  function onClick(e) {
    if (e.target.tagName == 'P') {
      const currentAnswer = e.target.textContent;
      answers.some((el) => el == currentAnswer) ? rightAnswers++ : null;
      sections[idx++].style.display = 'none';
      if (sections[idx]) {
        sections[idx].style.display = 'block';
      } else {
        resultUl.style.display = 'block';
        if (rightAnswers > 2) {
          outputH1.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          outputH1.textContent = `You have ${rightAnswers} right answers`;
        }
      }
    }
  }
}
