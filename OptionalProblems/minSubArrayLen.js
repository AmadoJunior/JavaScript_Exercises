/**
 * Write a function called minSubArrayLen which accepts two parameters
 * - an array of positive integers and a positive a integer.
 * 
 * This function should return a minimal elngth of a contigous subarray 
 * of which the sum is greater than to the integers passed to the funciton.
 * If there isn't one, return 0 instead.
 */

function minSubArrayLen(numsArray, num){
    let i = 0;
    let j = 0;
    let sum = 0;
    let minArrayLength = Infinity;

    while(i < numsArray.length){
        if(sum < num && j < numsArray.length){
            sum += numsArray[j];
            j++;
        } else if(sum >= num){
            minArrayLength = Math.min(minArrayLength, j-i);
            sum -= numsArray[i];
            i++;
        } else {
            break;
        }
    }
    return minArrayLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));