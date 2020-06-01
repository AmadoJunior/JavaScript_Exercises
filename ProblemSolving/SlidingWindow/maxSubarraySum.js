/**
 * Write a function called maxSubarraySum which accepts an array of 
 * integers and a number caleld n. The function should calculate the max
 * sum of n consecutive elements in the array.
 * 
 * Ex.
 *  maxSubarraySum([1,2,5,2,8,1,5], 2) -> 10
 */

//Naive Solution: Runs O(N^2) Time, Takes O(1) Space 
function maxSubarraySumNaive(arr, num) {
    if( num > arr.length ){
        return null;
    }

    let max = -Infinity;
    for(let i = 0; i < arr.length - num +1; i++){
        let temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}
//Sliding Window Solution: Runs O(N) Time, Takes O(1) Space 
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;

    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}