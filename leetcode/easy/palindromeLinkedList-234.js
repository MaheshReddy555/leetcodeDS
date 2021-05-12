/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;
  if (head.val && !head.next) return true;
  let current = head;
  let isSame = true;
  function traverse(node) {
    let prev = null;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    if (node.val === current.val) {
      isSame = true;
    } else {
      isSame = false;
    }

    prev.next = null;
  }

  while (isSame && current && current.next) {
    traverse(current);
    current = current.next;
  }
  return isSame;
};
