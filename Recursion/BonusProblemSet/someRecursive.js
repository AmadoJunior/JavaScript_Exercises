/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true is a single value in the array returns true when passed to the
 * callback. Otherwise it returns false.
 */

 function isOdd(num){
    return num % 2 !== 0 ? true : false;
 }

 function someRecursive(arr, callback){
    let oddArr = [];
    function helper(input){
        if(input.length <= 0){
            return;
        }
        if(callback(input[0])){
            oddArr.push(input[0]);
        }
        helper(input.slice(1));
    }
    helper(arr);
    return oddArr.length > 0 ? true : false;
 }

 console.log(someRecursive([6,2,6], isOdd));