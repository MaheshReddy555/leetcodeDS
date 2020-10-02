class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarSearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          console.log("object");
          current.left = newNode;
          return this;
        }
        current = current.left;
      }

      if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (val === this.parent.value) return this.parent;
    let current = this.parent;

    while (true) {
      if (val === current.value) return current;
      if (val < current.value) {
        current = current.left;
      }

      if (val > current.value) {
        current = current.right;
      }
    }
  }

  bfs() {
    let qu = [];
    let result = [];
    qu.push(this.root);

    while (qu.length !== 0) {
      let elem = qu.shift();
      result.push(elem.value);
      if (elem.left) {
        qu.push(elem.left);
      }
      if (elem.right) {
        qu.push(elem.right);
      }
    }

    return result;
  }
  dfsPreorder() {
    let result = [];
    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    console.log(result);
    return result;
  }

  dfsInorder() {
    let result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    console.log(result);
    return result;
  }

  postInorder() {
    let result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);
    console.log(result);
    return result;
  }

  trim(min, max) {
    let current = this.root;
    let result = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.value >= min && current.value <= max) {
        result.push(current.value);
      }
      if (current.right) traverse(current.right);
    }

    traverse(current);
    console.log(result, "after triimming");
    return result;
  }
}

//      10
//   5     13
// 2  7  11  16

//preorder  10, 5, 2, 7, 13, 11, 16   can export and easy to re-construct
//Inorder   2, 5, 7, 10, 11, 13, 16
//postorder 2, 7, 5, 11, 16, 13, 10

// trim binary search(max,min,head)
// inorder,preorder
//is binarysearch tree or not

var tree = new BinarSearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.postInorder();
tree.trim(5, 13);
// console.log(tree.bfs());
