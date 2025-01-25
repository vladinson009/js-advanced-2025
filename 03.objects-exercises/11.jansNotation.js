function solve(operations) {
  const action = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  const result = [];
  for (let operation of operations) {
    if (typeof operation === 'number') {
      result.push(operation);
    } else if (typeof action[operation] === 'function') {
      if (result.length < 2) {
        return console.log('Error: not enough operands!');
      }
      const secondNum = result.pop();
      const firstNum = result.pop();
      const currentNum = action[operation](firstNum, secondNum);
      result.push(currentNum);
    }
  }
  if (result.length > 1) {
    return console.log('Error: too many operands!');
  }
  if (result.length === 1) {
    console.log(result[0]);
  }
}
solve([15, '/']);
