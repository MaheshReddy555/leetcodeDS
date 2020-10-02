/**
 * @param {number} numRows
 * @return {number[][]}

 Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

 In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */


 //This is my working solution, check for another optimize solution
var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1],[1,1]];
    
    let output = [[1],[1,1]];
    let count = 1;
    while(output.length !== numRows){
        let beforeArr = output[count]
        count++;
        let arrlen = output.length + 1;
        let newArr = [];
        newArr[0] = 1;
        for(let i=1;i< arrlen-1;i++){
            newArr[i] = beforeArr[i-1] + beforeArr[i];
        }
        newArr[arrlen-1] = 1;
        output.push(newArr)
    }
    
    return output
};