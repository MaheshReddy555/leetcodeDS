/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 * Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sCount = {};
  for (let i = 0; i < s.length; i++) {
    if (sCount[s[i]]) sCount[s[i]] += 1;
    else sCount[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (sCount[t[i]]) sCount[t[i]] -= 1;
    else return false;
  }
  return true;
};
