function lockedProfile() {
  document.getElementById('main').addEventListener('click', toggleFunction);

  function toggleFunction(e) {
    if (e.target.tagName == 'BUTTON') {
      const profile = e.target.parentElement;
      const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

      if (isActive) {
        const infoDiv = profile.querySelector('div');

        if (e.target.textContent == 'Show more') {
          infoDiv.style.display = 'block';
          e.target.textContent = 'Hide it';
        } else {
          infoDiv.style.display = '';
          e.target.textContent = 'Show more';
        }
      }
    }
  }
}
