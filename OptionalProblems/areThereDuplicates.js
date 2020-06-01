/**
 * Implement a function called, areThereDuplicates which accepts a
 * variable number of arguments, and checks whether there are any
 * duplicates among the arguments passed in. You can solve this using the
 * frequency counter pattern OR the multiple pointers pattern.
 */

//Freq Counter Solution: Time - O(N), Space - O(N)
function areThereDuplicates() {
    let freqCounter = {};
    for(let i = 0; i < arguments.length; i++){
        if(freqCounter[arguments[i]]){
            return true;
        } else {
            freqCounter[arguments[i]] = true;
        }
    }
    return false;
}

//Multiple Pointers Solution: Time - O(n log n), Space - O(1)
function areThereDuplicatesBonus(...args) {
    args.sort();
    let j = 1;
    let i = 0;
    while(j !== args.length){
        if(args[j] !== args[i]){
            i++;
            j++;
        } else {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1,2,13,4));
console.log(areThereDuplicatesBonus(1,2,1,4));