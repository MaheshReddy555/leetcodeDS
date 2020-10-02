class graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) this.list[vertex] = [];
  }

  addEdge(v1, v2) {
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeEdge(v1, v2) {
    for (let i = 0; i < this.list[v1].length; i++) {
      if (this.list[v1][i] === v2) {
        this.list[v1].shift(i);
      }
    }

    for (let i = 0; i < this.list[v2].length; i++) {
      if (this.list[v2][i] === v1) {
        this.list[v2].shift(i);
      }
    }
  }

  removeVertex(vertex) {
    while (this.list[vertex].length) {
      let vt = this.list[vertex].pop();
      this.removeEdge(vertex, vt);
    }
    delete this.list[vertex];
  }

  bfs(start) {
    let queue = [];
    let visited = {};
    queue.push(start);
    let result = [];
    visited[start] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.list[currentVertex].forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      });
    }
    console.log("breadth first search", result);
    return result;
  }

  dfs() {}
}

let g = new graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
console.log(g);

g.removeEdge("Dallas", "Tokyo");
console.log(g);
g.bfs("Dallas");
