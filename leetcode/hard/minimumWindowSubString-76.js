/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. 
 * If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Example 2:

Input: s = "a", t = "a"
Output: "a"
 */
/**
 * 
 * https://www.youtube.com/watch?v=U1q16AFcjKs&ab_channel=MichaelMuinos
this is using sliding window technique with i,j starting at same point
 first look for all letters
and then move i until letter is nill in map
 *
 */

var minWindow = function (s, t) {
  let tmap = {};

  t.split("").forEach((item) => {
    if (!tmap[item]) tmap[item] = 1;
    else tmap[item] = tmap[item] + 1;
  });
  let count = Object.keys(tmap).length;
  let i = 0;
  let j = 0;
  let found = false;
  let left = 0;
  let right = s.length - 1;
  let subLength = s.length;
  while (j < s.length) {
    if (tmap.hasOwnProperty(s[j])) {
      tmap[s[j]] = tmap[s[j]] - 1;
      if (tmap[s[j]] === 0) count = count - 1;
    }
    j = j + 1;

    if (count > 0) continue;

    while (count === 0) {
      if (tmap.hasOwnProperty(s[i])) {
        tmap[s[i]] = tmap[s[i]] + 1;
        if (tmap[s[i]] > 0) count = count + 1;
      }
      i = i + 1;
    }
    let diff = j - i;
    if (diff < subLength) {
      left = i;
      right = j;
      subLength = diff;
      found = true;
    }
  }

  if (!found) return "";

  return s.substring(left - 1, right);
};
