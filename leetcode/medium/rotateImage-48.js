/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * 
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

1 2 3
4 5 6
7 8 9

1 4 7
2 5 8
3 6 9
 */
var rotate = function (matrix) {
  //doing transpose means (change rows to colums and colums to rows)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp1 = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp1;
    }
  }

  //and then reverse the matrix for each row
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
      let len = matrix[i].length;

      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][len - 1 - j];
      matrix[i][len - 1 - j] = temp;
    }
  }

  console.log(matrix);
};
