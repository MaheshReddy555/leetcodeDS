/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 */
var firstUniqChar = function (s) {
  let splitarr = s.split("");
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  console.log(obj);

  for (const [letter, count] of Object.entries(obj)) {
    if (count === 1) return splitarr.indexOf(letter);
  }

  return -1;
};
