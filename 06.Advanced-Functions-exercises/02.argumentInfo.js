function solve(...arg) {
  const typeCounter = {};
  arg.forEach((el) => {
    console.log(`${typeof el}: ${el}`);
    if (!typeCounter[typeof el]) {
      typeCounter[typeof el] = 0;
    }
    typeCounter[typeof el]++;
  });
  Object.entries(typeCounter)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`${type} = ${count}`);
    });
}
solve('cat', 42, function () {
  console.log('Hello world!');
});
