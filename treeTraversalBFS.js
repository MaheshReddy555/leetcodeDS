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

  DfsPreOrdertraversal(root = this.root, res = []) {
    if (!root) return undefined;
    if (!root.left) {
      res.push(root.val);
      return root.val;
    }

    this.traversal(root.left, res);
    this.traversal(root.right, res);

    return res;
  }

  BreadthFS() {
    let current = this.root;
    let queue = [];
    let result = [];
    queue.push(current);
    while (queue.length) {
      current = queue.unshift();
      result.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  DFSInorder() {
    let res = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      res.push(ndoe.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return res;
  }

  DFSPreorder() {
    let res = [];

    function traverse(node) {
      res.push(ndoe.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return res;
  }

  DFSPostorder() {
    let res = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(ndoe.val);
    }
    traverse(this.root);

    return res;
  }
}

//      10
//   5     13
// 2  7  11  16
