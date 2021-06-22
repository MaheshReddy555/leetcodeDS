/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
Input: m = 3, n = 7
Output: 28

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Input: m = 7, n = 3
Output: 28

Input: m = 3, n = 3
Output: 6
https://www.youtube.com/watch?v=4Zq2Fnd6tl0&ab_channel=MichaelMuinos
 */

//this is based on dynamic programming
var uniquePaths = function (m, n) {
  let internalArray = new Array(n).fill(0);
  let dp = new Array(m).fill(internalArray);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j === 0) {
        //in any condition the first row and first column will be 1
        dp[i][j] = 1;
      } else {
        let top = 0;
        let left = 0;
        if (dp[i - 1] && dp[i - 1][j]) top = dp[i - 1][j];
        if (dp[i][j - 1]) left = dp[i][j - 1];
        dp[i][j] = top + left;
      }
    }
  }

  return dp[m - 1][n - 1];
};
