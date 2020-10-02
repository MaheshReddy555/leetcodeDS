function MergeSort(nums){
    if(nums.length <= 1) return nums

    let mid = Math.floor(nums.length/2);
    let left = MergeSort(nums.slice(0,mid));
    let right = MergeSort(nums.slice(mid));

    return merge(left,right)
}

function merge(left,right){
    let out = [];
    let i=0;
    let j=0;
    while (i< left.length && j< right.length) {
        if(left[i] < right[j]){
            out.push(left[i])
            i++
        }else {
            out.push(right[j])
            j++
        }
    }

    while(i <left.length){
        out.push(left[i])
        i++
    }

    while (j< right.length) {
        out.push(right[j])
        j++
    }
    
    return out
}