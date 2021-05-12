/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
        3
       /
      9
       \
        10
        [[3],[9],[10]]
 */
var levelOrder = function (root) {
  let queue = [{ level: 0, node: root }];
  let result = [];

  while (queue.length) {
    let { level, node } = queue.shift();
    if (!node) {
      continue;
    }
    result[level] = result[level] || [];
    result[level].push(node.val);

    queue.push({ level: level + 1, node: node.left });
    queue.push({ level: level + 1, node: node.right });
  }

  return result;
};
