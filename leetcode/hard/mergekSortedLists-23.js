/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function mergeTwoLists(l1, l2) {
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        currentNode.next = l1;
        l1 = l1.next;
      } else {
        currentNode.next = l2;
        l2 = l2.next;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = l1 || l2;
    return tempNode.next;
  }
  let mergedLlist = new ListNode(0, null);

  for (let i = 0; i < lists.length; i++) {
    let res = mergeTwoLists(mergedLlist.next, lists[i]);
    mergedLlist.next = res;
  }
  return mergedLlist.next;
};
