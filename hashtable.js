class Node {
  constructor() {
    this.values = null;
  }
}

class Heaps {
  constructor(size = 53) {
    this.values = new Array(size);
  }

  insert(key, value) {
    let to = this.calculateIndex(key);
    if (!this.values[to]) this.values[to] = [];
    this.values[to].push({ key, value });
    console.log(this.values);
    return this.values;
  }

  calculateIndex(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = (total * prime + key.charCodeAt(i)) % this.values.length;
    }
    return total;
  }

  get(key) {
    let to = this.calculateIndex(key);
    return this.values[to];
  }
}

let he = new Heaps();
he.insert("first", "yes this is the value");
he.get("first");
console.log(he.get("first"));
