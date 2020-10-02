function buySelMaxProfit(stockprices) {
  let goforward = false;

  for (let i = 0; i < stockprices.length - 1; i++) {
    if (stockprices[i + 1] - stockprices[i] > 0) {
      goforward = true;
    }
  }
  if (!goforward) return 0;

  //   let priceTrack = {};

  //   for (let i = 0; i < stockprices.length; i++) {
  //     let maxProf = 0;
  //     for (let j = i + 1; j < stockprices.length; j++) {
  //       let jvalue;
  //       if (stockprices[i] < stockprices[j]) {
  //         maxProf = Math.max(maxProf, stockprices[j] - stockprices[i]);
  //         jvalue = stockprices[j];
  //       }
  //       if (j === stockprices.length - 1) {
  //         priceTrack[String(stockprices[i])] = maxProf;
  //       }
  //     }
  //   }

  //   let start, end;
  let count = 0;
  for (let i = 0; i < stockprices.length; i++) {
    if (stockprices[i] < stockprices[i + 1]) {
      let diff = stockprices[i + 1] - stockprices[i];
      count = count + diff;
    }
  }
  console.log("time is", count);
}

// console.log(buySelMaxProfit([7, 6, 4, 3, 1]));
console.log(buySelMaxProfit([7, 1, 5, 3, 6, 4]));
