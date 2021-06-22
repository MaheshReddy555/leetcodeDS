/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Example 3:
Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]

Example 4:
Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]

Example 5:
Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
 */
var insert = function (intervals, newInterval) {
  let out = [];
  for (let i = 0; i < intervals.length; i++) {
    //first check if interval is totally left of the new intervals
    //second check if interval strating is grater than new Interval ending then insert new Interval
    //and update newInterval
    //If above two conditions fail that means merge them and update is as newInterval
    if (intervals[i][1] < newInterval[0]) {
      out.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      out.push(newInterval);
      newInterval = intervals[i];
    } else {
      //this one excutes intervals[i][1] > newInterval[0] like merging
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }

  out.push(newInterval);
  console.log(out);
  return out;
};
