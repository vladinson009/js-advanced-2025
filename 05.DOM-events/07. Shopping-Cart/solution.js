function solve() {
  const textarea = document.querySelector('textarea');
  const checkout = document.querySelector('button.checkout');
  const shoppingCart = document.querySelector('div.shopping-cart');

  shoppingCart.addEventListener('click', onAdd);
  checkout.addEventListener('click', onCheckout);

  let totalPrice = 0;
  const setOfItems = new Set();
  function onAdd(e) {
    if (e.target.tagName == 'BUTTON' && e.target.textContent.trim() == 'Add') {
      const product = e.target.parentElement.parentElement;
      const name = product.children[1].children[0].textContent.trim();
      const money = Number(product.children[3].textContent.trim());
      totalPrice += money;
      setOfItems.add(name);
      textarea.textContent += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;
    }
  }
  function onCheckout(e) {
    textarea.textContent += `You bought ${[...setOfItems].join(', ')} for ${totalPrice.toFixed(
      2
    )}.`;
    Array.from(document.querySelectorAll('button')).forEach((el) => (el.disabled = true));
  }
}
