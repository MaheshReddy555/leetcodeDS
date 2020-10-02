/**
 * 
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Input: 1->2->4, 5->7->8
var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode();
  let currL1 = l1;
  let currL2 = l2;
  if (currL1 === null && currL2 === null) {
    return null;
  }

  let currNewList = newList;

  while (currL1 !== null || currL2 !== null) {
    if (currL1 === null) {
      currNewList.val = currL2.val;
      currL2 = currL2.next;
    } else if (currL2 === null) {
      currNewList.val = currL1.val;
      currL1 = currL1.next;
    } else if (currL1.val < currL2.val) {
      currNewList.val = currL1.val;
      currL1 = currL1.next;
    } else if (currL1.val > currL2.val) {
      currNewList.val = currL2.val;
      currL2 = currL2.next;
    } else {
      currNewList.val = currL1.val;
      currNewList.next = new ListNode();
      currNewList = currNewList.next;
      currNewList.val = currL2.val;
      currL1 = currL1.next;
      currL2 = currL2.next;
    }

    if (currL1 === null && currL2 === null) {
      // We don't need to do anything else when both of them are null
      // since this means we've reached the end for both.
      break;
    }

    currNewList.next = new ListNode();
    currNewList = currNewList.next;
  }

  return newList;
};
// var main = {};
// var dummy = main;
// dummy.val = '1';
// dummy.next = {};
// dummy = dummy.next;

//in-progress.... not sure if it works or not
var mergeTwoLists1 = function (l1, l2) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  let list1 = l1;
  let list2 = l2;
  if (l1.val < l2.val) {
    let newNode = new ListNode(l1.val);
    this.head = newNode;
  }

  if (l1.val > l2.val) {
    let newNode = new ListNode(l2.val);
    this.head = newNode;
  }

  if (l1.val === l2.val) {
    let newNode = new ListNode(l1.val);
    this.head = newNode;
    let anothernode = new ListNode(l2.val);
    this.head.next = anothernode;
    this.tail = anothernode;
    list1 = list1.next;
    list2 = list2.next;
  }

  while (true) {}
};
