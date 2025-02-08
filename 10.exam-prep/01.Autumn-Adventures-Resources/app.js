window.addEventListener('load', solve);

function solve() {
  // user input
  const [timeInput, dateInput, placeInput, eventNameInput, emailInput, addBtn] = [
    document.getElementById('time'),
    document.getElementById('date'),
    document.getElementById('place'),
    document.getElementById('event-name'),
    document.getElementById('email'),
    document.getElementById('add-btn'),
  ];
  // unordered lists
  const [lastCheckList, upcomingList, finishedList] = [
    document.getElementById('check-list'),
    document.getElementById('upcoming-list'),
    document.getElementById('finished-list'),
  ];

  // add event listener for add button
  addBtn.addEventListener('click', onAdd);

  // add event listener for clear button with inline function
  document
    .getElementById('clear')
    .addEventListener('click', () => (finishedList.innerHTML = ''));

  // ! onAdd is top layer function
  function onAdd() {
    const [time, date, place, eventName, email] = [
      timeInput.value,
      dateInput.value,
      placeInput.value,
      eventNameInput.value,
      emailInput.value,
    ];
    // if one of time, date, place, eventName, email is empty, stop the program
    if (![time, date, place, eventName, email].every(Boolean)) {
      return;
    }
    const liElement = el('li', { className: 'event-content' }, [
      el('article', {}, [
        el('p', {}, `Begins: ${date} at: ${time}`),
        el('p', {}, `In: ${place}`),
        el('p', {}, `Event: ${eventName}`),
        el('p', {}, `Contact: ${email}`),
      ]),
      el(
        'button',
        {
          className: 'edit-btn',
          eventListener: {
            click: () => onEdit(time, date, place, eventName, email, liElement),
          },
        },
        'Edit'
      ),
      el(
        'button',
        {
          className: 'continue-btn',
          eventListener: { click: () => onContinue(liElement) },
        },
        'Continue'
      ),
    ]);
    document.querySelector('#form > form').reset();
    addBtn.disabled = true;
    lastCheckList.appendChild(liElement);
  }
  // ! onEdit is nested function in onAdd
  function onEdit(time, date, place, eventName, email, liElement) {
    timeInput.value = time;
    dateInput.value = date;
    placeInput.value = place;
    eventNameInput.value = eventName;
    emailInput.value = email;
    addBtn.disabled = false;
    liElement.remove();
  }
  // ! onContinue is nested function in onAdd
  function onContinue(liElement) {
    Array.from(liElement.querySelectorAll('button')).forEach((el) => el.remove());
    liElement.appendChild(
      el(
        'button',
        {
          className: 'finished-btn',
          eventListener: { click: () => onFinish(liElement) },
        },
        'Move to Finished'
      )
    );
    addBtn.disabled = false;
    upcomingList.appendChild(liElement);
  }
  // ! onFinish is nested function in onContinue
  function onFinish(liElement) {
    liElement.querySelector('button').remove();
    finishedList.appendChild(liElement);
  }
  // * create HTMLelements utility function
  function el(type, attributes, children) {
    // create HTML Element
    const element = document.createElement(type);
    // if attributes > add them to the element
    if (attributes) {
      for (const atr in attributes) {
        if (atr == 'dataset') {
          // el function now supports dataset attributes
          for (const key in attributes[atr]) {
            element.dataset[key] = attributes[atr][key];
          }
        } else if (atr == 'eventListener') {
          // handle event listener
          for (const eventName in attributes[atr]) {
            element.addEventListener(eventName, attributes[atr][eventName]);
          }
        } else {
          element[atr] = attributes[atr];
        }
      }
    }
    // if type of children is a String? add as TextContent
    if (typeof children == 'string') {
      element.textContent = children;
    } else if (Array.isArray(children)) {
      /**
       * if type of children is an Array =>
       * iterate over an array and append all children
       * */
      for (const child of children) {
        element.appendChild(child);
      }
    }
    return element;
  }
}
