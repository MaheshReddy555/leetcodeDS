/**
 * @param {number} x
 * @return {number}
 * 
 * https://www.youtube.com/watch?v=VYtEKhxKd1Q&ab_channel=TerribleWhiteboard
 * Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1;
  let right = x;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid > x) right = mid;
    else if (mid * mid < x) left = mid + 1;
  }

  return left - 1;
};
