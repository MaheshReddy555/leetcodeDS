/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */
var merge = function (intervals) {
  let out = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (!out.length) {
      out.push(intervals[i]);
      continue;
    }

    let len = out.length;
    if (out[len - 1][1] >= intervals[i][0]) {
      out[len - 1] = [
        out[len - 1][0],
        intervals[i][1] > out[len - 1][1] ? intervals[i][1] : out[len - 1][1],
      ];
    } else {
      out.push(intervals[i]);
    }
  }
  console.log(out);
  return out;
};
