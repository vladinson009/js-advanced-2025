class List {
  list = [];
  size = 0;
  static ascendingSort(list) {
    list.sort((a, b) => a - b);
  }
  static sanitizeIndex(index, list) {
    if (index < 0 || index >= list.length) {
      throw new Error('index is out of bound');
    }
  }
  add(element) {
    this.list.push(element);
    List.ascendingSort(this.list);
    this.size++;
  }
  remove(index) {
    List.sanitizeIndex(index, this.list);
    this.list.splice(index, 1);
    List.ascendingSort(this.list);
    this.size--;
  }
  get(index) {
    List.sanitizeIndex(index, this.list);
    return this.list.at(index);
  }
  get size() {
    return this.size;
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
