function solve(words) {
  console.log(words.match(/\w+/g).join(', ').toUpperCase());
}
solve('Hi, how are you?');
