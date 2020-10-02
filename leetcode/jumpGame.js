/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

 * 
 */
var canJump = function (nums) {
  //jump with current index and check if it has jumps of not
  if (nums.length < 2) return true;

  for (let i = 0; i < nums.length; i++) {
    if (i + nums[i] >= nums.length - 1) {
      return true;
    }

    if (nums[i] === 0) return false;

    let nextIndex = i + 1;
    if (i + nums[i] > nextIndex + nums[nextIndex]) {
      nums[nextIndex] = nums[i] - 1;
    }
  }
};

//another way
var canJump = function (nums) {
  //jump with current index and check if it has jumps of not
  let jumpLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > jumpLength) {
      return false;
    }
    jumpLength = Math.max(jumpLength, i + nums[i]);
  }
  return true;
};

//simplest, easy and understandable
var canJump1 = function (nums) {
  let lastGoodIndex = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    let indexDiff = lastGoodIndex - i;
    if (nums[i] >= indexDiff) {
      lastGoodIndex = i;
    }
  }
  return lastGoodIndex === 0;
};

console.log(canJump1([2, 3, 1, 1, 5]));
4 > 3;
4 - 1;
// canJump([2, 3, 1, 1, 5]);
//  3

// canJump([4, 3, 1, 1, 4]);
