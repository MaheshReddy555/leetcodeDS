/**
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
 * 
 * 
 * Definition for a binary tree node.
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
var maxDepth = function (root) {
  let max = 0;
  let current = root;

  function helper(node, count = 1) {
    if ((node && node.val) || (node && node.val === 0)) {
      count++;
      let left = helper(node.left, count);
      let right = helper(node.right, count);
      return Math.max(left, right);
    }
    return count;
  }
  let left, right;
  if (current === null) return 0;

  if (!current.left && !current.right) return 1;

  if (current.left && current.right) {
    left = helper(current.left);
    right = helper(current.right);
  }

  if (current.left && !current.right) return helper(current.left);
  if (!current.left && current.right) return helper(current.right);

  max = Math.max(left, right);
  return max;
};

function maxDepth1(node, count = 0) {
  if ((node && node.val) || (node && node.val === 0)) {
    count++;
    let left = maxDepth(node.left, count);
    let right = maxDepth(node.right, count);
    return Math.max(left, right);
  }
  return count;
}

function maxDepth(node) {
  let current = node;
  let leftcount = 0;
  let rightcount = 0;

  while (node) {
    leftcount++;
    current = node.left;
  }

  while (node) {
    rightcount++;
    current = node.right;
  }

  return Math.max(leftcount, rightcount);
}
