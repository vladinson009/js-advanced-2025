function juiceFlavors(input) {
  const map = new Map();
  const data = {};
  for (const each of input) {
    let [flavor, ml] = each.split(' => ');
    ml = Number(ml);
    if (!data.hasOwnProperty(flavor)) {
      data[flavor] = 0;
    }
    data[flavor] += ml;
    if (data[flavor] > 999) {
      const bottles = Math.floor(data[flavor] / 1000);
      !map.has(flavor) ? map.set(flavor, 0) : null;
      map.set(flavor, map.get(flavor) + bottles);
      data[flavor] -= bottles * 1000;
    }
  }
  const result = [];
  for (const [flavor, bottles] of map) {
    result.push(`${flavor} => ${bottles}`);
  }
  return result.join('\n');
}
console.log(
  juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
  ])
);
