function maxProfitInDay(prices) {
  let maxProf = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let prof = prices[i + 1] - prices[i];
    console.log(prof, prices[i]);
    maxProf = Math.max(maxProf, prof);
  }
  console.log("final result", maxProf);
  return maxProf;
}

maxProfitInDay([12, 11, 15, 3, 10]);
