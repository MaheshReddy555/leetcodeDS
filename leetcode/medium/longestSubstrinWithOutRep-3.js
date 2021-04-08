/**
 * @param {string} s
 * @return {number}
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 */
var lengthOfLongestSubstring = function (s) {
  let dict = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    if (!dict.has(s[right])) {
      dict.add(s[right]);
      right++;
      max = Math.max(max, dict.size);
    } else {
      dict.delete(s[left]);
      left++;
    }
  }
  return max;
};

//both solutions are easy, this looks more easy
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    let set = new Set(arr);
    if (set.size < arr.length) {
      arr.shift();
    }
  }
  return arr.length;
};
