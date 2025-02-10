window.addEventListener('load', solve);

function solve() {
  const [nameInput, heightInut, locationInput, creatorInput, attributesInput] = [
    document.getElementById('snowman-name'),
    document.getElementById('snowman-height'),
    document.getElementById('location'),
    document.getElementById('creator-name'),
    document.getElementById('special-attribute'),
  ];
  const [previewList, snowList, main] = [
    document.querySelector('.snowman-preview'),
    document.querySelector('.snow-list'),
    document.querySelector('main'),
  ];
  const addBtn = document.querySelector('.add-btn');

  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();

    const [name, height, location, creator, attribute] = [
      nameInput.value,
      heightInut.value,
      locationInput.value,
      creatorInput.value,
      attributesInput.value,
      ,
    ];
    if (![name, height, location, creator, attribute].every(Boolean)) {
      return;
    }
    addBtn.disabled = true;
    document.querySelector('.snowman').reset();

    const liElement = el('li', { className: 'snowman-info' }, [
      el('article', {}, [
        el('p', {}, `Name: ${name}`),
        el('p', {}, `Height: ${height}`),
        el('p', {}, `Location: ${location}`),
        el('p', {}, `Creator: ${creator}`),
        el('p', {}, `Attribute: ${attribute}`),
      ]),
      el('div', { className: 'btn-container' }, [
        el(
          'button',
          {
            className: 'edit-btn',
            eventListener: {
              click: () =>
                onEdit(name, height, location, creator, attribute, liElement),
            },
          },
          'Edit'
        ),
        el(
          'button',
          {
            className: 'next-btn',
            eventListener: { click: (e) => onNext(e, liElement) },
          },
          'Next'
        ),
      ]),
    ]);
    previewList.appendChild(liElement);
  }
  function onEdit(name, height, location, creator, attribute, liElement) {
    nameInput.value = name;
    heightInut.value = height;
    locationInput.value = location;
    creatorInput.value = creator;
    attributesInput.value = attribute;
    liElement.remove();
    addBtn.disabled = false;
  }
  function onNext(e, liElement) {
    e.target.parentElement.remove();
    liElement.className = 'snowman-content';
    liElement.children[0].appendChild(
      el(
        'button',
        { className: 'send-btn', eventListener: { click: onSend } },
        'Send'
      )
    );
    snowList.appendChild(liElement);
  }
  function onSend() {
    main.remove();
    document.getElementById('back-img').hidden = false;
    document.body.appendChild(
      el(
        'button',
        {
          className: 'back-btn',
          eventListener: { click: () => window.location.reload() },
        },
        'Back'
      )
    );
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
