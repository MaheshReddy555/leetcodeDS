/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */
// var twoSum = function(nums, target) {
//     for(let i=0;i< nums.length; i++){
//        for(let j=0; j< nums.length-1;j++){
//            if(nums[i] + nums[j] === target && i != j){
//                return [i,j]
//            }
//        }
//     }
// };

var twoSum = function (nums, target) {
  let out = {};
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (out.hasOwnProperty(nums[i].toString())) {
      return [out[nums[i]], i];
    } else {
      out[val] = i;
    }
  }
};
