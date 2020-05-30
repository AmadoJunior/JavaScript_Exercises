/**
 * countUniqueValues
 * Implement a function called countUniqueValues, which accepts a sorted
 * array, and count the unique values in the array. There can be negative 
 * numbers in the array, but it will always be sorted.
 */

 function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    while(j !== arr.length){
        if(arr[i] === arr[j]){
            j++;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(arr);
    return i+1;
 }

 console.log(countUniqueValues([1,1,1,2,3,3,3,4,5,5,6,6,7,8,33,22]));