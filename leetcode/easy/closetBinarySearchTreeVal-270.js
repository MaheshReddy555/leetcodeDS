/**
 * 
 * Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.
 * 
 * Input: root = [4,2,5,1,3], target = 3.714286
Output: 4

Example 2:
Input: root = [1], target = 4.428571
Output: 1
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let minval = Infinity;
  let nodeparent = null;
  function helper(node, target) {
    if (!node) return;
    let diff = Math.abs(node.val - target);
    let prev = minval;

    minval = Math.min(minval, diff);
    if (minval < prev) {
      nodeparent = node.val;
    }
    if (target < node.val) {
      helper(node.left, target);
    } else {
      helper(node.right, target);
    }
  }

  helper(root, target);
  return nodeparent;
};
