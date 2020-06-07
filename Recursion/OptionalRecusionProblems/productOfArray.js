/**
 * Write a function called productOfArray which takes in an array of 
 * numbers and returns the product of them all.
 */

function productOfArray(arr){
    if(arr.length < 1){
        return 1;
    }
    return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArrayTest([3,2,2]));