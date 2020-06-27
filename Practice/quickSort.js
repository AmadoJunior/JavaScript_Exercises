function swap(arr, index1, index2){
    temp = arr[index1];
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
    swap(arr, swapIndex, start);
    return swapIndex;
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let mid = pivot(arr, left, right);
        quickSort(arr, mid+1, right);
        quickSort(arr, left, mid-1);
    }
    return arr;
}
let tempArr = [3,4,2,1,-1,0];
console.log(quickSort(tempArr));