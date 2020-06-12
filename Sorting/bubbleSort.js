/**
 * In a bubble sort the largest value bubbles to the end of the array, we then ignore that value
 * and run the same process on the rest of the array.
 * 
 * O(n^2) time complexity.
 * 
 * If no swaps are done then we can break because that means that the array if already sorted
 * even though we have not reached the end of it.
 */

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

}

//Optimized with noSwaps
function bubbleSort(arr){
    let noSwaps;
    for(let i = 0; i < arr.length-1; i++){
        noSwaps = true;
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                noSwap = false;
            }
        }
        if(noSwaps){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,1,3,6,4,3]));