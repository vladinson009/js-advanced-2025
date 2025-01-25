function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [input, output] = document.querySelectorAll('textarea');
  const table = document.querySelector('table.table tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function buy() {
    const markedFurniture = table.querySelectorAll('input[type="checkbox"]:checked');
    const names = [];
    let totalPrice = 0;
    let totalDecFac = 0;
    for (let product of markedFurniture) {
      const row = product.parentElement.parentElement;
      const productName = row.children[1].textContent;
      const productPrice = Number(row.children[2].textContent);
      const decorationFactor = Number(row.children[3].textContent);
      totalPrice += productPrice;
      totalDecFac += decorationFactor;
      names.push(productName);
    }
    output.value = `Bought furniture: ${names.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${totalDecFac / markedFurniture.length}`;
  }

  function generate(e) {
    const data = JSON.parse(input.value);

    for (let furniture of data) {
      const row = document.createElement('tr');

      const imgCell = document.createElement('td');
      const img = Object.assign(document.createElement('img'), {
        src: furniture.img,
      });
      imgCell.appendChild(img);
      row.appendChild(imgCell);

      const furnitureName = document.createElement('td');
      const nameP = Object.assign(document.createElement('p'), {
        textContent: furniture.name,
      });
      furnitureName.appendChild(nameP);
      row.appendChild(furnitureName);

      const furniturePrice = document.createElement('td');
      const priceP = Object.assign(document.createElement('p'), {
        textContent: furniture.price,
      });
      furniturePrice.appendChild(priceP);
      row.appendChild(furniturePrice);

      const decFactor = document.createElement('td');
      const decP = Object.assign(document.createElement('p'), {
        textContent: furniture.decFactor,
      });
      decFactor.appendChild(decP);
      row.appendChild(decFactor);

      const checkbox = document.createElement('td');
      const checkInput = Object.assign(document.createElement('input'), {
        type: 'checkbox',
      });
      checkbox.appendChild(checkInput);
      row.appendChild(checkbox);
      ////////////
      table.appendChild(row);
    }
  }
}
