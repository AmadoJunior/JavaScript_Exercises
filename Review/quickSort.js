
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function pivot(arr, arrStart=0, arrEnd=arr.length-1){
    let swapIndex = arrStart;
    let pivot = arr[arrStart];
    for(let i = arrStart+1; i <= arrEnd; i++){
        if(arr[i] < pivot){
            swapIndex++; 
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, arrStart, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return;
}
arr = [3,2,1,0,2,4];
quickSort(arr);
console.log(arr);