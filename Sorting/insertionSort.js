/**
 * Insertion Sort
 * Builds up the sort by gradually creating a larger left half which is always sorted.
 * 
 * Time Complexity: O(n^2)
 * 
 * If array is almost sorted then insertion sort is good.
 */


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,3,6,2,1,2]));