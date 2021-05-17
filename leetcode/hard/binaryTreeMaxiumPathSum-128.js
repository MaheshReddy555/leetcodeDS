/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 
 * A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 *
 * https://www.youtube.com/watch?v=6cA_NDtpyz8&ab_channel=MichaelMuinos
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxi = -Infinity;

  function postorder(node) {
    if (!node) return 0;

    //here doing max of 0 is beacuse you to avoid negative numbers
    let left = Math.max(0, postorder(node.left));
    let right = Math.max(0, postorder(node.right));

    maxi = Math.max(maxi, left + right + node.val);

    //doing max of left and right because the path should on single line only
    return Math.max(left, right) + node.val;
  }
  postorder(root);
  return maxi;
};
