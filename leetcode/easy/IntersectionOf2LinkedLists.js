/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 Write a program to find the node at which the intersection of two singly linked lists begins.

      4   1
            \
             8  4  5  
           /
 5   6   1

For example, the following two linked lists:

example:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). 
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. 
There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 
 example:
 [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). 
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. 
There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
 
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//this is the best solution. in leetcode solution
var getIntersectionNode = function (headA, headB) {
  let pa = headA;
  let pb = headB;

  while (pa !== pb) {
    if (pa === null) {
      pa = headB;
    } else {
      pa = pa.next;
    }

    if (pb === null) {
      pb = headA;
    } else {
      pb = pb.next;
    }
  }
  return pa;
};

var getIntersectionNode = function (headA, headB) {
  function traverse(n1, n2) {
    // console.log(n1,n2)
    if (n1 === n2) return n1;
    if (!n1) return traverse(headB, n2.next);
    if (!n2) return traverse(n1.next, headA);
    return traverse(n1.next, n2.next);
  }
  return traverse(headA, headB);
};

//my solution
var getIntersectionNode = function (headA, headB) {
  let current = headA;
  let compCurr = headB;
  while (current) {
    if (current === compCurr) {
      return current;
    }
    current = current.next;
  }
  current = headA;
  compCurr = headB ? headB.next : null;
  if (compCurr) {
    return getIntersectionNode(current, compCurr);
  }
};
