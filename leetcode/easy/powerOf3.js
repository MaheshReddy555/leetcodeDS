/**
 * @param {number} n
 * @return {boolean}
 * 
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
Input: 27
Output: true

Example 2:
Input: 0
Output: false

Example 3:
Input: 9
Output: true

Example 4:
Input: 45
Output: false
 */
var isPowerOfThree = function (n) {
  for (let i = 1; i <= n; i *= 3) {
    if (i == n) return true;
  }
  return false;
};

//anotherway

var isPowerOfThree1 = function (n) {
  while (n > 1) {
    if (n % 3 === 0) n /= 3;
    else break;
  }
  return n === 1;
};
console.log(isPowerOfThree1(45));
