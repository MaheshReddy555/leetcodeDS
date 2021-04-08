/**
 * @param {string} s
 * @return {string}
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"
 */
var longestPalindrome = function (s) {
  if (s < 2) return s;
  let resultstart;
  let resultLength = 0;

  function extractFromcenter(s, start, end) {
    console.log("iputs", start, end);
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }

    if (resultLength < end - start - 1) {
      resultstart = start + 1;
      resultLength = end - start - 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    extractFromcenter(s, i, i);
    extractFromcenter(s, i, i + 1);
  }
  return s.substring(resultstart, resultstart + resultLength);
};
