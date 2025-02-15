window.addEventListener('load', solve);

function solve() {
  const form = document.querySelector('.container-form > form');
  const [typeInput, budgetInput, occasionInput, brandInput, skinTypeInput, nextBtn] =
    [
      document.getElementById('scent-type'),
      document.getElementById('budget'),
      document.getElementById('occasion'),
      document.getElementById('brand'),
      document.getElementById('skin-type'),
      document.getElementById('next-btn'),
    ];
  const [preferenceUl, confirmUl, thanksP] = [
    document.querySelector('.preference-list'),
    document.querySelector('.confirm-list'),
    document.getElementById('thanks-text'),
  ];

  nextBtn.addEventListener('click', onNext);

  function onNext(e) {
    e.preventDefault();
    thanksP.textContent = '';
    let [type, budget, occasion, brand, skinType] = [
      typeInput.value,
      budgetInput.value,
      occasionInput.value,
      brandInput.value,
      skinTypeInput.value,
    ];
    if (
      ![type, budget, occasion, brand, skinType].every(Boolean) ||
      Number.isNaN(Number(budget))
    ) {
      return;
    }

    const liElement = el('li', { className: 'content' }, [
      el('article', {}, [
        el('p', {}, `Scent Type: ${type}`),
        el('p', {}, `Budget: ${budget} $`),
        el('p', {}, `Occasion: ${occasion}`),
        el('p', {}, `Brand: ${brand}`),
        el('p', {}, `Skin Type: ${skinType}`),
      ]),
      el(
        'button',
        { className: 'edit-btn', eventListener: { click: onEdit } },
        'Edit'
      ),
      el(
        'button',
        { className: 'continue-btn', eventListener: { click: onContinue } },
        'Continue'
      ),
    ]);
    preferenceUl.appendChild(liElement);

    nextBtn.disabled = true;
    form.reset();

    function onEdit() {
      typeInput.value = type;
      budgetInput.value = budget;
      occasionInput.value = occasion;
      brandInput.value = brand;
      skinTypeInput.value = skinType;

      nextBtn.disabled = false;
      liElement.remove();
    }
    function onContinue(e) {
      Array.from(liElement.querySelectorAll('button')).forEach((b) => b.remove());

      const confirmBtn = el(
        'button',
        { className: 'confirm-btn', eventListener: { click: onConfirm } },
        'Confirm'
      );
      const cancelBtn = el(
        'button',
        { className: 'cancel-btn', eventListener: { click: onCancel } },
        'Cancel'
      );
      liElement.appendChild(confirmBtn);
      liElement.appendChild(cancelBtn);
      confirmUl.appendChild(liElement);

      function onConfirm() {
        liElement.remove();
        nextBtn.disabled = false;
        thanksP.textContent = 'Thank you for sharing your preferences!';
      }
      function onCancel() {
        liElement.remove();
        nextBtn.disabled = false;
      }
    }
  }

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
