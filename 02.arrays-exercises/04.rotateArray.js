function solve(arr, num) {
  
  for (let i = 0; i < num % arr.length; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(' '));
}
solve(['1', '2', '3', '4'], 2);
