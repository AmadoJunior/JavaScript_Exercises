/**
 * Suppose you want to count the number of time a smaller
 * string appears in a longer string.
 * A straightforward approach involves checking pairs of chars
 * individually.
 * 
 * This naive solution has following time complexity:
 * s = string
 * p = pattern
 * n = length(s) 
 * m = length(p)
 * 
 * O(n * m)
 */

function stringSearch(str, target){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < target.length; j++){
            timesRan++;
            if(str[i+j] !== target[j]){
                break;
            } else if(j === target.length-1){
                count++;
            }
        }
    }
    return count;
}

console.log(stringSearch("wowogzogas", "omg"))