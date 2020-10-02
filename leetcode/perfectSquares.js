/**
 * @param {number} n
 * @return {number}
 * 
 * 
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 * 
 * 
 * Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.


Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */

var numSquares = function (n) {
  n = 13;
  let squares = [];

  let i = 0;
  let total = 0;
  while (total <= n) {
    let val = i * i;
    squares[i] = val;
    total = total + val;
    console.log(squares, total);

    if (total === n) return squares.length;
    i++;
  }
  let squareLength = squares.length;
  console.log(
    "length is",
    squareLength,
    (squareLength + 1) * (squareLength + 1),
    n
  );
  if (n === (squareLength + 1) * (squareLength + 1)) return 1;
  let finalTotal = 0;
  for (let i = squares.length - 1; i > 0; i--) {
    finalTotal = squares[i] * squares[i];
    console.log("finaltoal", finalTotal);
    if (finalTotal === n) return squares.length - i;
  }
  console.log(total);
};
