/**
 * Definition for a binary tree node.
 * 
 * Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//this works fine and looks easy
var maxDepth = function (node, count = 0) {
  if (node === null) return count;
  count++;
  let left = maxDepth(node.left, count);
  let right = maxDepth(node.right, count);
  return Math.max(left, right);
};

function maxDepth(node, count = 0) {
  if ((node && node.val) || (node && node.val === 0)) {
    count++;
    let left = maxDepth(node.left, count);
    let right = maxDepth(node.right, count);
    return Math.max(left, right);
  }
  return count;
}
