/**
 * Example for Frequency Counter Pattern:
 * 
 * Write a function called same, which accepts two arrays. The function should
 * return true if every value in the array has its corresponding value squared 
 * in the second array. The frequency of values must be the same.
 */

//A Naive Solution
//Runs in O(n^2) time
function sameNaive(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex == -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}
console.log(sameNaive([1,2,3,2], [9,1,4,4]));

function sameRefactored(arr1, arr2){ // Runs in O(n) time
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    /**
     * Creates object that contain each value in the array as key properties
     * and each key has a value equivalent to its frequency
     */
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        //Check if freqCounter2 contains a key named to key^2
        if( !(key ** 2 in frequencyCounter2) ){
            return false;
        }
        //If it does, check if the frequency value of that key is the same as in freqCounter1
        if( frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

console.log(sameRefactored([1,2,3,2], [9,1,4,4]));