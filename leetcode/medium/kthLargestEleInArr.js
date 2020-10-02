/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
 */
// var findKthLargest = function(nums, k) {
//     let sortedArr = nums.sort((a,b)=>a-b);
//     let ind = nums.length-k
//     return sortedArr[ind]
    
// };

var findKthLargest = function(nums, k) {
    let sortedArr = MergeSort(nums);
    console.log(sortedArr)
    let ind = nums.length-k
    return sortedArr[ind]
    
};

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

