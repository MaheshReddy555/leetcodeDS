/**
 * @param {number} n
 * @return {boolean}
 * 
 * Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 
Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
 */

var isHappy = function (n, counter = 0) {
  if (counter < 8) {
    let strNum = n.toString();
    let sqVal = 0;
    for (let i = 0; i < strNum.length; i++) {
      let num = Number(strNum[i]);
      sqVal = num * num + sqVal;
    }
    counter++;
    if (sqVal === 1) return true;
    return isHappy(sqVal, counter);
  } else {
    return false;
  }
};

var isHappy = function (n, counter = 0) {
  let res = false;
  console.log(counter);

  if (n === 0) {
    res = false;
  }

  if (n === 1) {
    res = true;
  }

  if (counter < 8) {
    let numarr = n.toString().split("");
    let count = 0;
    for (let j = 0; j < numarr.length; j++) {
      count = count + numarr[j] * numarr[j];
    }
    counter++;
    return isHappy(count, counter);
  }
  return res;
};
