/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */
var setZeroes = function (matrix) {
  console.table(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let row = i;
        let column = j;
        while (column > 0) {
          column = column - 1;
          matrix = makeRowsAndColumsZero(matrix, row, column);
        }
        column = j;
        while (column < matrix[0].length) {
          column = column + 1;
          matrix = makeRowsAndColumsZero(matrix, row, column);
        }
        column = j;

        while (row > 0) {
          row = row - 1;
          matrix = makeRowsAndColumsZero(matrix, row, column);
        }
        row = i;
        while (row < matrix.length) {
          row = row + 1;
          matrix = makeRowsAndColumsZero(matrix, row, column);
        }
      }
    }
  }
  return matrix;
};

function makeRowsAndColumsZero(matrix, row, column) {
  if (
    row < 0 ||
    column < 0 ||
    row >= matrix.length ||
    column >= matrix[row].length
  )
    return matrix;
  if (matrix[row][column] !== 0) matrix[row][column] = null;

  return matrix;
}
