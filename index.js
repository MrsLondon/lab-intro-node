class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b) // a - b: Ascending order / b - a: Descending order.
    this.length = this.items.length;  
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}


