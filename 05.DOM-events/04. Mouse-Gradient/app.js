function attachGradientEvents() {
  const result = document.getElementById('result');
  const gradient = document.getElementById('gradient');
  console.log(gradient);
  gradient.addEventListener('mousemove', onHover);

  result.textContent = '';

  function onHover(e) {
    const box = e.target;
    const offset = Math.floor((e.offsetX / box.clientWidth) * 100);
    result.textContent = offset + '%';
  }
}
