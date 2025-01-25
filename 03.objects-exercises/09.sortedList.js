function solve() {
  function add(num) {
    this.collection.push(Number(num));
    this.size++;
    this.collection.sort((a, b) => a - b);
  }
  function remove(index) {
    if (index >= 0 && index < this.collection.length) {
      this.collection.splice(index, 1);
      this.size--;
      this.collection.sort((a, b) => a - b);
    }
  }
  function get(index) {
    if (index >= 0 && index < this.collection.length) {
      return this.collection[index];
    }
  }

  return { collection: [], size: 0, add, remove, get };
}
let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
