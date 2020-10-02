/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 */

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log(middle);
    if (nums[middle] === target) return middle;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    //left part is sorted
    if (nums[middle] > nums[start]) {
      if (target > nums[start] && target < nums[middle]) {
        end = middle - 1;
        console.log("*******", start, end);
      } else {
        start = middle + 1;
      }
    } //right part is sorted
    else if (nums[middle] < nums[end]) {
      if (target > nums[middle] && target < nums[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    } else {
      return -1;
    }
  }
  return -1;
  //   console.log("start is", start);
  //   console.log(nums[start] === target ? start : -1);
  //   return nums[start] === target ? start : -1;
};
search([4, 5, 6, 7, 0, 1, 2], 0); //output is 4
//output is 1
// search([1, 3], 3); //output is -1
// search()

search(
  [
    266,
    267,
    268,
    269,
    271,
    278,
    282,
    292,
    293,
    298,
    6,
    9,
    15,
    19,
    21,
    26,
    33,
    35,
    37,
    38,
    39,
    46,
    49,
    54,
    65,
    71,
    74,
    77,
    79,
    82,
    83,
    88,
    92,
    93,
    94,
    97,
    104,
    108,
    114,
    115,
    117,
    122,
    123,
    127,
    128,
    129,
    134,
    137,
    141,
    142,
    144,
    147,
    150,
    154,
    160,
    163,
    166,
    169,
    172,
    173,
    177,
    180,
    183,
    184,
    188,
    198,
    203,
    208,
    210,
    214,
    218,
    220,
    223,
    224,
    233,
    236,
    241,
    243,
    253,
    256,
    257,
    262,
    263,
  ],
  208
);
