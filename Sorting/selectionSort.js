/**
 * Selection Sort
 * 
 * Similar to bubble sort, but instead of first placing large values into sorted position, it
 * places small values into soretd position.
 * 
 */
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

}

function selectionSort(arr){
    let min = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0+i; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        swap(arr, min, i);
    }
    return arr;
}

console.log(selectionSort([5,3,4,1,2]));