function solve() {
  const [name, hall, ticketPrice, onScreenBtn] = document.getElementById('container').children;
  const moviesUl = document.querySelector('#movies > ul');
  const archive = document.getElementById('archive');

  onScreenBtn.addEventListener('click', onScreen);
  moviesUl.addEventListener('click', onArchive);
  archive.addEventListener('click', onRemove);
  function onScreen(e) {
    e.preventDefault();
    if (
      name.value == '' ||
      hall.value == '' ||
      Number.isNaN(Number(ticketPrice.value)) ||
      ticketPrice.value == ''
    ) {
      return;
    }
    const price = Number(ticketPrice.value);
    const movieDiv = el('div', {}, [
      el('strong', {}, price.toFixed(2)),
      el('input', { placeholder: 'Tickets Sold' }),
      el('button', {}, 'Archive'),
    ]);
    const movieLi = el('li', {}, [
      el('span', {}, name.value),
      el('strong', {}, `Hall: ${hall.value}`),
      movieDiv,
    ]);
    moviesUl.appendChild(movieLi);
    document.getElementById('add-new').reset();
  }
  function onArchive(e) {
    const clickedBtn = e.target;
    const movieDiv = clickedBtn.parentElement;
    const movieLi = movieDiv.parentElement;
    const movieName = movieLi.querySelector('span').textContent;
    const ticketsAmount = movieDiv.querySelector('input');

    if (
      clickedBtn.tagName == 'BUTTON' &&
      clickedBtn.textContent == 'Archive' &&
      !Number.isNaN(Number(ticketsAmount.value)) &&
      ticketsAmount.value
    ) {
      const pricePerTicket = Number(movieDiv.querySelector('strong').textContent);
      const totalAmount = (pricePerTicket * Number(ticketsAmount.value)).toFixed(2);
      const archiveLi = el('li', {}, [
        el('span', {}, movieName),
        el('strong', {}, `Total amount: ${totalAmount}`),
        el('button', {}, 'Delete'),
      ]);
      archive.children[1].appendChild(archiveLi);
      movieLi.remove();
    }
  }
  function onRemove(e) {
    const clickedBtn = e.target;
    if (clickedBtn.tagName != 'BUTTON') {
      return;
    }
    if (clickedBtn.textContent == 'Delete') {
      clickedBtn.parentElement.remove();
    } else if (clickedBtn.textContent == 'Clear') {
      archive.children[1].replaceChildren();
    }
  }
  // ! utility function to create HTML element
  function el(type, attributes, children) {
    const element = document.createElement(type);
    if (attributes) {
      for (const attribute in attributes) {
        element[attribute] = attributes[attribute];
      }
    }
    if (typeof children == 'object') {
      for (each of children) {
        element.appendChild(each);
      }
    } else if (typeof children == 'string') {
      element.textContent = children;
    }
    return element;
  }
}
