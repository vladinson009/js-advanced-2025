window.addEventListener('load', solve);

function solve() {
  const [typeInput, intensityInput, caloriesInput, durationInput, dateInput] = [
    document.getElementById('type'),
    document.getElementById('intensity'),
    document.getElementById('calories'),
    document.getElementById('duration'),
    document.getElementById('date'),
  ];
  const addBtn = document.getElementById('add-activity');
  const [previewActivity, activitiesTable] = [
    document.getElementById('preview-activity'),
    document.getElementById('activities-table'),
  ];
  addBtn.addEventListener('click', onAdd);

  function onAdd() {
    const [type, intensity, calories, duration, date] = [
      typeInput.value,
      intensityInput.value,
      caloriesInput.value,
      durationInput.value,
      dateInput.value,
    ];
    if (![type, intensity, calories, duration, date].every(Boolean)) {
      return;
    }
    const liElement = el('li', {}, [
      el('article', {}, [
        el('p', {}, `Activity: ${type}`),
        el('p', {}, `Intensity: ${intensity}`),
        el('p', {}, `Duration: ${duration}`),
        el('p', {}, `Date: ${date}`),
        el('p', {}, `Calories: ${calories}`),
      ]),
      el('div', { className: 'btn-container' }, [
        el(
          'button',
          {
            className: 'edit-btn',
            eventListener: {
              click: () =>
                onEdit(type, intensity, calories, duration, date, liElement),
            },
          },
          'Edit'
        ),
        el(
          'button',
          {
            className: 'next-btn',
            eventListener: {
              click: () =>
                onNext(type, intensity, calories, duration, date, liElement),
            },
          },
          'Next'
        ),
      ]),
    ]);
    document.querySelector('.activity-form').reset();
    addBtn.disabled = true;
    previewActivity.appendChild(liElement);
  }
  function onEdit(type, intensity, calories, duration, date, liElement) {
    typeInput.value = type;
    intensityInput.value = intensity;
    caloriesInput.value = calories;
    durationInput.value = duration;
    dateInput.value = date;
    addBtn.disabled = false;
    liElement.remove();
  }
  function onNext(type, intensity, calories, duration, date, liElement) {
    const trElement = el('tr', {}, [
      el('td', { className: 'type-cell' }, type),
      el('td', { className: 'duration-cell' }, duration),
      el('td', { className: 'calories-cell' }, calories),
      el('td', { className: 'date-cell' }, date),
      el('td', { className: 'intensity-cell' }, intensity),
      el('td', { className: 'btn-cell' }, [
        el(
          'button',
          { className: 'delete-btn', eventListener: { click: onDelete } },
          'Delete'
        ),
      ]),
    ]);
    addBtn.disabled = false;
    liElement.remove();
    activitiesTable.appendChild(trElement);
  }
  function onDelete(e) {
    e.target.parentElement.parentElement.remove();
  }

  // ! utility function to create HTML elements
  function el(type, props, children) {
    const element = document.createElement(type);
    if (props) {
      for (const atr in props) {
        if (atr == 'eventListener') {
          for (const eventName in props[atr]) {
            element.addEventListener(eventName, props[atr][eventName]);
          }
        } else {
          element[atr] = props[atr];
        }
      }
    }
    if (children) {
      if (typeof children == 'string') {
        element.textContent = children;
      } else if (Array.isArray(children)) {
        for (const each of children) {
          element.appendChild(each);
        }
      }
    }
    return element;
  }
}
