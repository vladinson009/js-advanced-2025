// ! utility function to create HTML elements
export default function el(type, props, children) {
  const element = document.createElement(type);
  if (props) {
    for (const atr in props) {
      if (atr == 'eventListener') {
        for (const eventName in props[atr]) {
          element.addEventListener(eventName, props[atr][eventName]);
        }
      } else if (atr == 'style') {
        for (const styleAtr in props[atr]) {
          element.style[styleAtr] = props[atr][styleAtr];
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
