class hashtab {
  constructor(size = 53) {
    this.values = new Array(size);
  }

  pushValue(key, value) {
    let hashvalue = this.hashFunc(key);

    if (!this.values[hashvalue]) {
      this.values[hashvalue] = [];
    }

    this.values[hashvalue].push([key, value]);

    console.log(this.values);
    return this;
  }

  hashFunc(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total * 31 + key.charCodeAt(i) - 96) % this.values.length;
    }
    console.log("this is total", total);
    return total;
  }

  getValue(key) {
    let hashvalue = this.hashFunc(key);

    if (this.values[hashvalue]) {
      for (let i = 0; i < this.values[hashvalue].length; i++) {
        if (this.values[hashvalue][i][0] === key) {
          return this.values[hashvalue][i][1];
        }
      }
    }
  }
}

let ha = new hashtab();
ha.pushValue("red", "rrrrr");
ha.pushValue("orange", "ooooo");
ha.pushValue("white", "wwww");
ha.pushValue("black", "bbbb");
console.log("thisifdldf", ha.getValue("orange"));

// console.log(ha);
