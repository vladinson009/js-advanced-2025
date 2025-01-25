function solve(input) {
  const data = input.toString();
  let isSame = true;
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    data[0] !== data[i] ? (isSame = false) : null;
    sum += Number(data[i]);
  }
  console.log(isSame + '\n' + sum);
}
solve(1234);
