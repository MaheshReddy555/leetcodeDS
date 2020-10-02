/**
 * @param {string} s
 * @return {boolean}
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
 */
var isPalindrome = function (s) {
  var letters = /^[A-Za-z]+$/;
  s = s.toLowerCase();
  let fixStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i])) || s[i].match(letters)) {
      fixStr = fixStr + s[i];
    }
  }

  fixStr = fixStr.replace(/ /g, "");
  let i = 0;
  let j = fixStr.length - 1;
  console.log("yuyi. ", fixStr, fixStr.length);
  while (i <= j) {
    console.log("initial vals", i, j);
    if (fixStr[i] !== fixStr[j]) {
      console.log(i, j);
      return false;
    }
    i++;
    j--;
  }
  return true;
};
