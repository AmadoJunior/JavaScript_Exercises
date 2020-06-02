/**
 * Write a function caleld minSubarrayLen which accepts two parameters - 
 * an array of positive integers and a positive integer.
 * 
 * This function should return a minimal length of a contiguous subarray which
 * the sum is greater than or equal to the integer passed to the function.
 * If there isnt one, return 0 instead.
 */

function minSubarrayLen(arr, targetSum){
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start < arr.length){
        /**
         * If the current window doesn't add up to the given sum then move the
         * second "end" pointer to the right in order to make the sum subarray bigger.
         */
        if(total < targetSum && end < arr.length){
            total += arr[end];
            end++;
        } else if(total >= sum){
            /**
             * If the current window adds up to at least the sum given then
             * we can shrink the window by substracting arr[start] from current sum and moving "start" pointer up
             */
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        } else {
            //Current total less than required total but we reach the end with second pointer "end".
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}