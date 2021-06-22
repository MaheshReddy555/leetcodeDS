/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.
 
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

https://www.youtube.com/watch?v=HS7t2i9ldmE&t=719s&ab_channel=SaiAnishMallaSaiAnishMalla
*/
var numIslands = function (grid) {
  let queue = [];
  let numberofIslands = 0;

  function checkFellowIsland() {
    let currentCoordiantes = queue.shift();
    if (!currentCoordiantes) return;
    let row = currentCoordiantes[0];
    let column = currentCoordiantes[1];
    let directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    // top,right,bottom,left

    for (let i = 0; i < directions.length; i++) {
      let x = directions[i][0] + row;
      let y = directions[i][1] + column;

      if (
        x > -1 &&
        x < grid.length &&
        y > -1 &&
        y < grid[0].length &&
        grid[x][y] === "1"
      ) {
        grid[x][y] = "0";
        queue.push([x, y]);
      }
    }

    if (queue.length) checkFellowIsland();
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "0";
        numberofIslands = numberofIslands + 1;
        queue.push([i, j]);
      }

      checkFellowIsland();
    }
  }
  return numberofIslands;
};
