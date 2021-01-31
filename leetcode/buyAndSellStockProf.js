let stockValuesPerDay = [100, 180, 260, 310, 40, 535, 695];

console.log("input is ", stockValuesPerDay);


// i = transaction
// j = current day or ...
// m= the day you buy

//price[j] --- SELL price you sell on jth day
//price[m]  ---- BUY  buying on mth day90

// price[j] - price[m] + T[i-1][m]
// m=  0,1,...,j-1


for(let i=0; i< stockValuesPerDay.length; i++){


}
