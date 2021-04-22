/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//iterative
var reverseList = function (head) {
  let current = head;
  let prev = null;
  let next = null;
  while (current) {
    //first save next value into variable (beacause we are changing current.next below)
    next = current.next;

    //then set next values using prev
    current.next = prev;

    //then set prev as current value
    prev = current;

    //and set current as first saved next
    current = next;
  }
  return prev;
};

//recursive
var reverseList = function (head, prev = null) {
  if (!head) return prev;
  let next = current.next;
  head.next = prev;
  reverseList(next, head);
};
