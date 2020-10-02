class Node {
  constructor(val) {
    this.val = val;
    this.nxt = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      newNode.nxt = this.tail;
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.nxt = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;

      newNode.prev = this.head;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    poppedNode.nxt = null;
    this.tail = poppedNode.prev;
    poppedNode.prev = null;
    this.length--;
    return this;
  }
  //remove first element
  shift() {
    let poppedNode = this.head;
    this.head = poppedNode.nxt;
    this.head.prev = null;
    poppedNode.nxt = null;
    this.length--;
    return poppedNode;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    let newNode = new Node(val);
    let oldhead = this.head;

    oldhead.prev = newNode;
    newNode.nxt = oldhead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current;
    let count;
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      while (index != count) {
        current = current.nxt;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (index != count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return undefined;

    let prevnode = this.get(index - 1);
    let nxtnode = this.get(index + 1);
    let node = this.get(index);

    prevnode.nxt.val = val;
    nxtnode.prev.val = val;
    node.val = val;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    let newNode = new Node(val);
    let foundNode = this.get(index - 1);
    if (foundNode) {
      let curNxt = foundNode.nxt;
      foundNode.nxt = newNode;
      newNode.prev = foundNode;
      newNode.nxt = curNxt;
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    let foundNode = this.get(index);
    if (foundNode) {
      let setnxt = foundNode.nxt;
      let setprev = foundNode.prev;

      setprev.nxt = setnxt;
      setnxt.prev = setprev;
      this.length--;

      foundNode.nxt = null;
      foundNode.prev = null;
    }
    return this;
  }

  //15---->12----->9
  reverse() {
    let current = this.tail;

    while (current.prev) {
      let prev = current.prev;
      let next = current.nxt;

      current.nxt = prev;
      current.prev = next;
      current = prev;
    }

    return this;
  }

  //from course excersixce
  rreverse() {
    let oldhead = this.head;
    let oldtail = this.tail;
    this.head = oldtail;
    this.tail = oldhead;
    let next;
    let prev;
    let count = this.length;
    let current = this.tail;
    while (count > 0) {
      console.log(current.val);
      let tempnext = current.next;
      let tempprev = current.prev;
      current.next = tempprev;
      current.prev = tempnext;
      current = current.prev;
      count--;
    }
    console.log("woe", this.head.val, this.head.next, this.tail.val);
    return this;
  }
}
