let inputArr = [5,1,0,4,2,3];
let inputVal = 3
console.log(inputArr);
const findNumOfHops =(arr,val)=>{
    let negative = Number.NEGATIVE_INFINITY;

    let arrValue =arr[val]
    if(arr[val] >= 0){
        arr[val] = arrValue + negative;
        let hops = findNumOfHops(arr,arrValue) +1
        arr[val]= arrValue
        return hops
    }
    return -1
}

let final = findNumOfHops(inputArr,inputVal);

console.log(final)
