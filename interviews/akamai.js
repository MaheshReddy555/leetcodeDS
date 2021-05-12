//question 1
//863: All Nodes Distance K in Binary Tree
var distanceK = function (root, target, K) {
  let m = new Map();
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left) {
      m.set(node.left, node);
      queue.push(node.left);
    }
    if (node.right) {
      m.set(node.right, node);
      queue.push(node.right);
    }
  }
  // (key, value) in m is (child, parent)

  let values = [],
    visited = new Map();
  queue = [{ node: target, distance: 0 }];

  while (queue.length > 0) {
    let { node, distance } = queue.shift();
    // if (visited.has(node)) continue;
    // we don't need this line but you can have it to play safe
    visited.set(node, 1);

    if (distance == K) {
      values.push(node.val);
      continue; // optimisation
    }

    if (node.left && !visited.has(node.left)) {
      queue.push({ node: node.left, distance: distance + 1 });
    }
    if (node.right && !visited.has(node.right)) {
      queue.push({ node: node.right, distance: distance + 1 });
    }
    if (m.has(node) && !visited.has(m.get(node))) {
      queue.push({ node: m.get(node), distance: distance + 1 });
    }
  }
  return values;
  // Time Complexity: O(n)
  // Space Complexity: O(n)
};

//quesion2
// replace ? with 0 and 1 ab?fd?kd?, combination problem

/**
 * 
 * function repeat(str, count) {
  let res = new Array(100);
  //if less than 100000
  let newS = "";
  for (let i = 0; i < 10000; i++) {
    newS = newS + str;
    res.push(newS);
  }

  function helper(str, count) {
    if (count > 1000000) {
      return str;
    }

    return str + helper(str, count + 10000);
  }
  let ned = helper(newS, 10000);
  console.log(ned.length);
}

repeat("a", 1000000);

 */

function repeat(str, count) {
  let res = new Array(100);
  //if less than 100000
  let newS = "";
  for (let i = 0; i < 10000; i++) {
    newS = newS + str;
    res.push(newS);
  }

  function helper(str, count) {
    if (count > 1000000) {
      return str;
    }

    return str + helper(str, count + 10000);
  }
  let ned = helper(newS, 10000);
  console.log(ned.length);
}

repeat("a", 1000000);
