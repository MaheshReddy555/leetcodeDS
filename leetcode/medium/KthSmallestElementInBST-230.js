/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let out = [];
  function helper(node) {
    if (!node) return;
    helper(node.left);
    out.push(node.val);
    helper(node.right);
  }
  helper(root);
  return out[k - 1];
};
