function solve(number, ...operations) {
  const operation = {
    chop: (numb) => numb / 2,
    dice: (numb) => Math.sqrt(numb),
    spice: (numb) => numb + 1,
    bake: (numb) => numb * 3,
    fillet: (numb) => numb - numb * 0.2,
  };
  operations.reduce((acc, currentOperation) => {
    acc = operation[currentOperation](acc);
    console.log(acc);
    return acc;
  }, Number(number));
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
