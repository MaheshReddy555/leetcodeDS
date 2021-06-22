function schedule(start, end, dstart, dend, dprice) {
  let deliverisLen = dstart.length;
  let profit = 0;

  for (let i = 0; i < deliverisLen; i++) {
    if (dstart[i] >= start && dend[i] <= end) {
      profit = profit + dprice[i];
      start = dend[i];
    }
  }
  console.log(profit, start);
  return profit;
}

schedule(0, 10, [1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]);
