class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  binaryToStr(str) {
    let i = 0;
    let left = 1;
    let right = 2;

    while (i !== str.length - 2) {
      console.log(i, str.length - 2);
      let newNode = new Node(str[i]);
      newNode.left = str[2 * i + 1];
      newNode.right = str[2 * i + 2];
      if (i === 0) this.root = newNode;
      //   let current = this.root;
      //   while (node.left) {
      //     current = current.left;
      //   }
      //   current.left = str[2 * i + 1];
      //   current.right = str[2 * i + 2];
      i++;
    }
    console.log(this);
  }

  callrecu(val) {
    let newNode = new Node(val);
    if (!this.root) this.root = newNode;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    if (!current.left) current.left = newNode;
    if (!current.right) current.right = newNode;
  }

  binaryToString(str) {
    let parsed = str.split("(");
    console.log(parsed);
  }
}

let bs = new BinaryTree();
// bs.binaryToStr("mahesh");

bs.binaryToString("4(2(3)(1))(6(5))");

//   "4  ( 2 (3) (1) ) ( 6 (5) )"
/**
 * 
      4
    /   \
    2     6
    / \   / 
    3   1 5 
 * 
 * 
 */
