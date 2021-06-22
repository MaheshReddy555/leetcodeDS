let input = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
];
let k = 1;
let output = 3;

function maxTurbines(input) {
  //   var arr = [
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 1],
  //     [1, 0, 0, 0],
  //     [1, 0, 0, 0],
  //   ];
  let arr = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
  ];
  var result = [];
  var pos = [];

  for (
    var a = 0, aa = arr.length;
    a < aa;
    a++ // this loop may be able to be done when data is read in
  ) {
    result[a] = [];
    for (var b = 0, bb = arr[a].length; b < bb; b++) {
      result[a][b] = -1;
      if (arr[a][b] == 1) pos.push({ x: a, y: b, dist: 0 });
    }
  }
  var dx = [-1, 0, 0, 1];
  var dy = [0, 1, -1, 0];

  while (pos.length > 0) {
    var p = pos[0];
    pos.splice(0, 1);
    if (result[p.x][p.y] == -1) {
      result[p.x][p.y] = p.dist;
      for (var a = 0; a < 4; a++) {
        var x = p.x + dx[a];
        var y = p.y + dy[a];
        if (x >= 0 && x < result.length && y >= 0 && y < result[p.x].length)
          pos.push({ x: x, y: y, dist: p.dist + 1 });
      }
    }
  }
  //   for (var a = 0, aa = arr.length; a < aa; a++) {
  //     console.log(result[a]);
  //   }
  let k = 2;
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] > k) count++;
    }
  }
  console.log("count is", count);
}
maxTurbines(input);
