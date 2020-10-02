/**
 * @param {string} s
 * @return {number}
 * 
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

Example 1:
Input: "A"
Output: 1

Example 2:
Input: "AB"
Output: 28

Example 3:
Input: "ZY"
Output: 701
 */
var titleToNumber = function (s) {
  let exp = 0;
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    console.log("code os", s.charCodeAt(i) - 64);
    let code = s.charCodeAt(i) - 64;
    if (i === s.length - 1) {
      sum = sum + code;
    } else {
      sum = sum + Math.pow(26, exp) * code;
    }
    exp++;
  }
  return sum;
};
