/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]


 */
var spiralOrder = function (matrix) {
  if (!matrix || !matrix.length) return null;

  let res = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  let totalElem = matrix.length * matrix[0].length;

  while (res.length < totalElem) {
    for (let i = left; i <= right && res.length < totalElem; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && res.length < totalElem; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && res.length < totalElem; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && res.length < totalElem; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
};
