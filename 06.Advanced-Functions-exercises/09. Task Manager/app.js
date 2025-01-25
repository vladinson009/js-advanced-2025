function solve() {
  const wrapper = document.querySelector('div.wrapper');
  const [, openSection, progressSection, completeSection] = document.querySelectorAll('section');
  const inputTask = document.getElementById('task');
  const textareaDescription = document.getElementById('description');
  const inputDate = document.getElementById('date');

  wrapper.addEventListener('click', onClick);

  const actions = {
    Add: onAdd,
    Start: onStart,
    Delete: onDelete,
    Finish: onFinish,
  };
  // * cliclHandler
  function onClick(e) {
    e.preventDefault();
    const clickedBtn = e.target;
    if (clickedBtn.tagName != 'BUTTON') {
      return;
    }
    const action = clickedBtn.textContent;
    if (typeof actions[action] == 'function') {
      actions[action](clickedBtn);
    }
  }
  // ! action buttons
  function onAdd() {
    if (inputTask.value == '' || textareaDescription.value == '' || inputDate.value == '') {
      return;
    }
    const h3 = el('h3', {}, inputTask.value);
    const description = el('p', {}, `Description: ${textareaDescription.value}`);
    const date = el('p', {}, `Due Date: ${inputDate.value}`);

    const startBtn = el('button', { className: 'green' }, 'Start');
    const deleteBtn = el('button', { className: 'red' }, 'Delete');
    const div = el('div', { className: 'flex' }, [startBtn, deleteBtn]);

    const article = el('article', {}, [h3, description, date, div]);
    console.log(openSection.children[1]);

    openSection.children[1].appendChild(article);
    document.querySelector('form').reset();
  }
  function onStart(clickedBtn) {
    const divFlex = clickedBtn.parentElement;
    const article = divFlex.parentElement;
    const finishButton = el('button', { className: 'orange' }, 'Finish');
    clickedBtn.remove();
    divFlex.appendChild(finishButton);
    progressSection.children[1].appendChild(article);
  }
  function onDelete(clickedBtn) {
    clickedBtn.parentElement.parentElement.remove();
  }
  function onFinish(clickedBtn) {
    const flexDiv = clickedBtn.parentElement;
    const article = flexDiv.parentElement;
    flexDiv.remove();
    completeSection.children[1].appendChild(article);
  }
  // ! utility function to create elements
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
