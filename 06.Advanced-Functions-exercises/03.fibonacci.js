function solve() {
  let first = 0;
  let second = 1;
  return function () {
    let next = first + second;
    first = second;
    second = next;
    return first;
  };
}

let fib = solve();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
