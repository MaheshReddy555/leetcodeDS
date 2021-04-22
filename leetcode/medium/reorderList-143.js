/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null) return;

  //head of first list
  let l1 = head;
  //tail of first list
  let prev = null;

  //head of second list
  let slow = head;
  //tail of second list
  let fast = head;

  //this while is for splitting the list into two halfs
  while (fast != null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  //reverse second half
  let l2 = reverse(slow);
  merge(l1, l2);
};

function merge(l1, l2) {
  while (l1 !== null) {
    let l1next = l1.next;
    let l2next = l2.next;

    l1.next = l2;

    if (l1next === null) break;
    l2.next = l1next;
    l1 = l1next;
    l2 = l2next;
  }
}

function reverse(list) {
  let next = null;
  let prev = null;

  let current = list;
  while (current) {
    next = current.next;

    current.next = prev;

    prev = current;

    current = next;
  }
  return prev;
}
