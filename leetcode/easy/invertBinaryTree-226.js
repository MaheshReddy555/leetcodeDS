/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]


Input: root = [2,1,3]
Output: [2,3,1]
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//this is using BFS
var invertTree = function (root) {
  if (root == null) return null;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};
