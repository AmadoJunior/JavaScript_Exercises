/**
 * Quick Sort:
 * 
 * Privot Helper Function: 
 * 
 * - I norder to implement merge sort, it is userful to first implement a function responsible for
 * arranging elements in an array on either side of a pivot.
 * - Given an array, this helper function should designate an element as the pivot.
 * - It should then rearrange elements in the array so that all values less than the pivot are moved
 * to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
 * - The helper should do this in place, that is, it should not create a new array.
 * - When complete, the helper should return the index of the pivot
 * 
 * Picking a Pivot:
 * - The runtime of quick sort depends in part on how one select the pivot.
 * - Ideally, the pivot hsould be chosen that its's roughly the median values in the data set
 * you're sorting.
 * - For simplicity, we'll always choose the pivot to be the first element.
 */

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function pivot(arr, start=0, end=arr.length-1){
    let swapIndex = start;
    let pivot = arr[start];
    for(let i = start+1; i <= end; i++){
        if(arr[i] < pivot){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

/**
 * Quicksort Peudocode
 * - Call the pivot helper on the array
 * - When the helper returns to you the updated pivot index, recursively call the pivot helper
 * on the subarray to the left of that index, and the subarray to the right of that index
 */

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]));
