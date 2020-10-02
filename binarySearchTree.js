import { cursorTo } from "readline";

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      this.length++;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.left) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }

      if (val > current.right) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    let found = false;
    while (current.left && current.right && !found) {
      if (val === current.val) return (found = true);

      if (val < current.val) {
        current = current.left;
      }

      if (val > current.val) {
        current = current.right;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

//      10
//   5     13
// 2  7  11  16
