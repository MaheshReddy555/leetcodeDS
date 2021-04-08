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
 * 
 * 
 * 
 * 
 * 
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 */

//https://www.youtube.com/watch?v=3iIpnouY-bg
var isSymmetric = function (root) {
  //think about page folding technique, left half and right half should layover on eachother when you fold paper
  if (!root) return true;
  return isSymmetry(root.left, root.right);
};

function isSymmetry(leftNode, rightNode) {
  if (!leftNode || !rightNode) return leftNode === rightNode;
  if (leftNode.val !== rightNode.val) return false;

  return (
    isSymmetry(leftNode.left, rightNode.right) &&
    isSymmetry(leftNode.right, rightNode.left)
  );
}
