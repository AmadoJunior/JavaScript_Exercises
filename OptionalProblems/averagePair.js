/**
 * Write a function called averagePair. Given a sorted array of
 * integers and a target average, determine if there is a pair of values
 * in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 */

 //Multiple Pointers: Time O(N), Space O(1)
function averagePair(arr, target){
    let start = 0;
    let end = arr.length-1;
    while(start < end){
        let average = (arr[start] + arr[end]) / 2;
        if(average === target){
            return true;
        } else if(average > target){
            end--;
        } else if(average < target){
            start++;
        }
    }
    return false;
}

console.log(averagePair([1,2,3,4], 2.5));