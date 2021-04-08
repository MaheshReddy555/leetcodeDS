/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0
 */

//  there is Knuth–Morris–Pratt(KMP) Pattern Matching algorithm which gives BigO as O(m +n), but it is tough

//Below solution is O(mn)
var strStr = function (haystack, needle) {
  if (haystack === needle) return 0;
  if (needle === "") return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let compareStr = "";

    for (let j = 0; j < needle.length; j++) {
      compareStr += haystack[i + j];
    }
    if (compareStr === needle) {
      return i;
    }
  }
  return -1;
};
