/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;

  if (root == p || root == q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left != null && right != null) return root;
  if (left == null && right == null) return null;

  return left != null ? left : right;
};

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
console.log(root);
console.log(lowestCommonAncestor(root, root.left, root.left.right.right));
