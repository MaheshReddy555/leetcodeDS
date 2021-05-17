/**
 * 
 * @param {
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

 Return the smallest level x such that the sum of all the values of nodes at level x is maximal.} root 

 Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.


Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

 */

var maxLevelSum = function (root) {
  // Array to keep track of sums per level
  let sums = [];

  // Level Order Traversal
  const recursive = (node, level) => {
    if (!node) return;

    // Calculate sums for each level and store in array
    sums[level] = sums[level] ? sums[level] + node.val : node.val;

    recursive(node.left, level + 1);
    recursive(node.right, level + 1);
  };

  recursive(root, 0);

  // Return the index of the max value in the array
  // Note: level is 1-index based
  return sums.indexOf(Math.max(...sums)) + 1;
};

/**
 * args 7,1
 * args 7+7, 2
 *
 *
 *          1
 *         /  \
 *        7    0
 *       / \
 *      7   -8
 *
 *
 *
 */
