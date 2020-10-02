function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

// 1+ sum(4-1)
//3 + sum(3-1)
//2+ sum(2-1)
//1  retrn 1
