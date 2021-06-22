/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return helper(0, 0, inorder.length - 1, preorder, inorder);
};

function helper(preorderStart, inorderStart, inorderEnd, preorder, inorder) {
  if (preorderStart > preorder.length - 1 || inorderStart > inorderEnd)
    return null;

  let root = new TreeNode(preorder[preorderStart]);
  let inorderIndex = inorder.indexOf(preorder[preorderStart]);
  console.log(inorderIndex);
  root.left = helper(
    preorderStart + 1,
    inorderStart,
    inorderIndex - 1,
    preorder,
    inorder
  );
  //as a part of recursion , you might already completed left part
  //and when it  back to  first recursion you might complete below preorderStart+1
  //so to avoid that one we have preorderStart + inorderIndex - inorderStart + 1
  root.right = helper(
    preorderStart + inorderIndex - inorderStart + 1,
    inorderIndex + 1,
    inorderEnd,
    preorder,
    inorder
  );
  // when you reach right node, you already might complete all left nodes,
  //so to avoid them we have to remove that boundary with inorderIndex - inorderStart

  return root;
}
