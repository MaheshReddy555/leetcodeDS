let stockValuesPerDay = [100, 180, 260, 310, 40, 535, 695];

console.log("input is ", stockValuesPerDay);

const calStockProf =(arr)=>{


        if(arr.length <= 1){
            return 0
        }

        let leftArr = arr.slice(0,Math.floor(arr.length/2));
        let rightArr = arr.slice(Math.floor(arr.length/2));
        console.log('left array is ',leftArr);
        console.log('right array is ',rightArr);

        let leftBest  = calStockProf(leftArr)
        let rightBest = calStockProf(rightArr);
        console.log('left best is ', leftBest);
        console.log('rigth best is ', rightBest);
        console.log('*********************************')

        // console.log(Math.max(...leftArr))
        // console.log(Math.max(...rightArr))


        let crossBest = Math.max(...rightArr) - Math.min(...leftArr);

        // console.log('cross best is ', crossBest)


        return Math.max( leftBest,rightBest,crossBest)



}

let final = calStockProf(stockValuesPerDay);

console.log('final is ', final)