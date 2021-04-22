/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
 * and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

 */
var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      let threesum = sorted[i] + sorted[left] + sorted[right];
      if (threesum < 0) {
        left++;
      } else if (threesum > 0) {
        right--;
      } else {
        output.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        while (sorted[left] === sorted[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return output;
};
