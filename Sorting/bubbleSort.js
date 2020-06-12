/**
 * In a bubble sort the largest value bubbles to the end of the array, we then ignore that value
 * and run the same process on the rest of the array.
 */

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

}

function bubbleSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2,1,3,6,4,3]));