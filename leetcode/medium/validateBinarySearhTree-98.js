/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * Input: root = [2,1,3]
Output: true


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

var isValidBST = function (root) {
  let minCompareNum = -Infinity;

  let stack = [];

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    //For bst left child always should be less than parent value
    //And for right child it is always higher value than parent
    //so after left comparision success, change min to parent value and parent to right
    if (minCompareNum <= root.val) {
      minCompareNum = root.val;
      root = root.right;
    } else {
      return false;
    }
  }
  return true;
};
