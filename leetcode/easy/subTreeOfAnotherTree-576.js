/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false

*/
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
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
var isSubtree = function (root, subRoot) {
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (isSameTree(node, subRoot)) return true;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
};
