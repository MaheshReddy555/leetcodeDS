/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 * 
 * 
 Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var sortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
  console.log(start, end);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("mid is", mid);
    console.log("start end is", start, end);

    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, start, mid - 1);
    console.log("**********");
    root.right = sortedArrayToBST(nums, mid + 1, end);
    return root;
  }
  return null;
};
