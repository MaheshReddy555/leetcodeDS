/**
 * Share
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 
 * Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function (root) {
  var arr = [];
  serializeHelper(root);
  function serializeHelper(node) {
    if (node === null) {
      arr.push("null");
      return;
    }
    // preorder
    arr.push(node.val);
    serializeHelper(node.left);
    serializeHelper(node.right);
  }
  return arr.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function (data) {
  var arr = data.split(",");
  var index = 0;
  var node = deserializeHelper();
  function deserializeHelper() {
    if (index >= arr.length) {
      return null;
    }
    if (arr[index] === "null") {
      index++;
      return null;
    }
    var cur = new TreeNode(parseInt(arr[index++]));
    cur.left = deserializeHelper();
    cur.right = deserializeHelper();
    return cur;
  }
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
