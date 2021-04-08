/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  for (let k in obj) {
    if (obj[k] === 1) {
      return k;
    }
  }
};

//bitwise operator method gives O(n) and O(1) space complexity
/**
Concept

\oplus = XOR

If we take XOR of zero and some bit, it will return that bit
a \oplus 0 = aa⊕0=a

If we take XOR of two same bits, it will return 0
a \oplus a = 0a⊕a=0

a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b


So we can XOR all bits together to find the unique number.


const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
 */
var singleNumber = function (nums) {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a ^= i;
  }
  return a;
};
