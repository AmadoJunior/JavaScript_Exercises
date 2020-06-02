/**
 * Given an array of integers and a number, write a function called 
 * maxSubarraySum, which finds the amximum sum of a subarray with the length
 * of the number passed tot he function.
 * 
 * Note that a subarray must consist of consecutive elements from the original
 * array.
 */

function maxSubarraySum(arr, length){
    let maxSum = 0;
    //Find first sum
    for(let i = 0; i < length; i++){
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    //Slide window up and replace max sum if nessesary
    for(let i = length; i < arr.length; i++){
        tempSum = tempSum - arr[i - length] + arr[i];
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));