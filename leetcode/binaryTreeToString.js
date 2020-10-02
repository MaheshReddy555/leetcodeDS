var tree2str = function (t) {
  console.log(t, t.val, t.left, typeof t);
  if (!t) {
    return "";
  }
  let val = t.val;
  let left = tree2str(t.left);
  let right = tree2str(t.right);

  if (!left && !right) {
    return `${val}`; // both left and right are empty
  }

  if (!right) {
    return `${val}(${left})`; // right is empty, keep the left
  }

  return `${val}(${left})(${right})`;
};
//"1(2(4))(3)"
tree2str([1, 2, 3, 4]);

// 1
// /   \
// 2     3
// /
// 4
