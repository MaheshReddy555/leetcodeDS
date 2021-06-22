/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === word[0] &&
        findRemainingWords(board, word, [i, j], 0)
      ) {
        return true;
      }
    }
  }
  return false;
};

function findRemainingWords(board, word, startingCoordinates, wordIndex) {
  if (wordIndex === word.length) return true;
  let row = startingCoordinates[0];
  let column = startingCoordinates[1];
  if (
    row < 0 ||
    column < 0 ||
    row >= board.length ||
    column >= board[0].length ||
    board[row][column] !== word[wordIndex]
  ) {
    return false;
  }

  let temp = board[row][column];
  board[row][column] = " ";
  let found =
    findRemainingWords(board, word, [row - 1, column], wordIndex + 1) ||
    findRemainingWords(board, word, [row, column + 1], wordIndex + 1) ||
    findRemainingWords(board, word, [row + 1, column], wordIndex + 1) ||
    findRemainingWords(board, word, [row, column - 1], wordIndex + 1);
  board[row][column] = temp;
  return found;
}
