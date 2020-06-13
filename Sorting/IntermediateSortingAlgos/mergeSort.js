
/**
 * Merge helper function: 
 * 
 * - Given two array which are sorted, this helper function should create a new
 * array which is also sorted, and cosists of all of the elements in the two inputs arrays.
 * - This function should run in O(n + m) time and O(n + m) space and should not modify the parameters
 * to it.
 * 
 */

function mergeSortedArrays(arr1, arr2){
    let result = [];
    let j = 0;
    let i = 0;
    while(j < arr2.length && i < arr1.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

/**
 * Merge Sort
 * - Its a combination of two thigns - merging and sorting
 * - Exploits the fact that arrays of 0 or 1 element are always sorted
 * 
 * How does it work?
 * - Break up the array into halves until you have arrays that are empty or have one element.
 * - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until ou are
 * back at the full length of the array.
 * - Once the array has been merged back together, return the merged (and sorted!) array.
 * 
 */

function mergeSort(arr){

    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let arr1 = mergeSort(arr.slice(0, middle));
    let arr2 = mergeSort(arr.slice(middle));
    console.log(arr1, arr2);
    return mergeSortedArrays(arr1, arr2);
}

console.log(mergeSort([5,4,3,2,2,5,1,21,2]))