/**
 * @param {number} x
 * @return {number}
 * 
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
 */

//About bit manipulation
//https://www.youtube.com/watch?v=NLKQEOgBAnw&ab_channel=HackerRank
var reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
    x = x * -1;
  }
  console.log("intial num", x);
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31)) {
    return 0;
  }
  return negative ? reversed * -1 : reversed;
};
