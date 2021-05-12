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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let obj = {};
  let minval = Infinity;
  function helper(node, target) {
    if (!node) return;
    let diff = Math.abs(node.val - target);
    let prev = minval;

    minval = Math.min(minval, diff);
    if (minval !== prev) {
      obj[minval] = node.val;
    }
    if (target < node.val) {
      helper(node.left, target);
    } else {
      helper(node.right, target);
    }
  }

  helper(root, target);
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  let out = Infinity;
  let outindex;
  keys.forEach((item, i) => {
    let prev = out;
    out = Math.min(Number(item), out);

    if (prev !== out) {
      outindex = i;
    }
  });
  return vals[outindex];
};
