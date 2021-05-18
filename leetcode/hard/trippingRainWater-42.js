/**
 * @param {number[]} height
 * @return {number}
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.
 */
var trap = function (height) {
  if (!height.length) return 0;

  /**
   * first move from left to right and save the left max values
   * second move from right to left and save right max values
   * And then take min of first and second for each iteration
   * and in each iteration delete building size to get water
   */
  let length = height.length;

  let leftarray = [];
  leftarray[0] = height[0];
  for (let i = 1; i < length; i++) {
    leftarray[i] = Math.max(height[i], leftarray[i - 1]);
  }

  let rightarray = [];
  rightarray[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightarray[i] = Math.max(height[i], rightarray[i + 1]);
  }

  //now find min of leftarray and rightarray to find water at each level;
  let totalwater = 0;
  for (let i = 0; i < height.length; i++) {
    let minval = Math.min(leftarray[i], rightarray[i]);
    totalwater = totalwater + minval - height[i];
  }

  return totalwater;
};
