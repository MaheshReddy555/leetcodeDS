function buyAndSell(arr) {
  let maxProfit = 0;
  let low = Infinity;
  for (let i = 0; i < arr.length; i++) {
    maxProfit = Math.max(maxProfit, arr[i] - low);
    low = Math.min(low, arr[i]);
  }
  console.log("***********", maxProfit);
  return maxProfit;
}

buyAndSell([7, 1, 5, 3, 6, 4]);
