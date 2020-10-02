class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Sll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.head.next = this.tail;
      this.length++;
      return this;
    }
    let prevTail = this.tail;
    this.tail = newNode;
    prevTail.next = newNode;
    this.length++;
    return this;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  get(indx) {
    console.log("object");
    let count = 0;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (count + 1 === indx) {
        console.log("******", current);
        return current;
      }
      current = current.next;
      count++;
    }
  }

  cycleCheck() {
    let current = this.head;
    let result;

    while (current.next) {
      result = current.value;
      current = current.next;
    }
    if (result === current.value) return true;
    return false;
  }
}

let sllvalues = new Sll();
console.log(sllvalues);
sllvalues.add(5);
sllvalues.add(9);
sllvalues.add(20);
sllvalues.add(40);
sllvalues.add(5);
sllvalues.cycleCheck();

// // sllvalues.reverse();
// sllvalues.get(4);
