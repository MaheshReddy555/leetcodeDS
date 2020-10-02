import { isUndefined } from "util";

class Node {
  constructor(val) {
    this.val = val;
    this.nxt = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.nxt = null;
      this.length++;
      return this;
    }
    let prev = this.tail;
    prev.nxt = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      let ret = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return ret;
    }
    let current = this.head;
    let previous;
    while (current.nxt) {
      previous = current;
      current = current.nxt;
    }
    this.tail = previous;
    this.tail.nxt = null;
    this.length--;
    return current;
  }

  //remove first value
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let res = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return res;
    }
    let currentHead = this.head;
    this.head = currentHead.nxt;

    return this;
  }
  //add node to the starting
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.push(val);
      return this;
    }

    let currentHead = this.head;
    this.head = newNode;
    this.head.nxt = currentHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let count = 0;
    let currentNode = this.head;
    while (count != index) {
      currentNode = currentNode.nxt;
      count++;
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);
    let prevnode = this.get(index - 1);

    if (node) {
      node.val = val;
      prevnode.nxt = node;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    let newNode = new Node(val);

    if (this.length === 0) {
      this.push(val);
      return this;
    }

    let prevNode = this.get(index - 1);
    let changenode = this.get(index);

    prevNode.nxt = newNode;
    newNode.nxt = changenode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (this.length === 0) {
      this.pop(val);
      return this;
    }
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    prevNode.nxt = nextNode;
    this.length--;
    return this;
  }

  reverse() {
    let node = this.head;
    this.head = oldtail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.nxt;
      node.nxt = prev;
      prev = next;
      node = next;
    }
    return this;
  }
}

//15--->10---->19----->9------->25
//15--->10---->19----->35------->25

let sll = new SingleLinkedList();
console.log("pushed ", sll.push(15));
console.log("pushed ", sll.push(10));
console.log("pushed ", sll.push(19));
console.log("pushed ", sll.push(9));
console.log("pushed ", sll.push(25));

console.log("index of 3", sll.get(3));
console.log("indchange value of ex of 3", sll.set(3, 35));

console.log("index of 3", sll.get(3));
//15--->10---->19----->33--->35------->25
console.log("index of 3", sll.insert(33, 3));

// console.log("unshift ", sll.unshift(100));
// console.log("shift ", sll.shift());
// console.log("pop ", sll.pop());
