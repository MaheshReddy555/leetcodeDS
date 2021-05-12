/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 
 * 
 * example
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
   Output: [3,9,20,null,null,15,7]


   Idea is find to the index of root in inorder and then left of that index elements are left subtree and right of them are right subtree
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
  root.right = helper(
    preorderStart + inorderIndex - inorderStart + 1, // when you reach right node, you already might complete all left nodes, so to avoid them we have to remove that boundary with inorderIndex - inorderStart
    inorderIndex + 1,
    inorderEnd,
    preorder,
    inorder
  );

  return root;
}
