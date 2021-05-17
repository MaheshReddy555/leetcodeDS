/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false

Input: p = [1,2,1], q = [1,1,2]
Output: false

 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let queue = [{ first: p, second: q }];

  while (queue.length) {
    let nodes = queue.shift();

    if (nodes.first === null && nodes.second === null) continue;

    if (nodes.first === null && nodes.second) return false;
    if (nodes.second === null && nodes.first) return false;
    if (nodes.first.val !== nodes.second.val) return false;

    queue.push({ first: nodes["first"].left, second: nodes["second"].left });
    queue.push({ first: nodes["first"].right, second: nodes["second"].right });
  }
  return true;
};
