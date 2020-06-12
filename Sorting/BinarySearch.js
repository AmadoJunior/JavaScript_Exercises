//O(logN)
function BinarySort(arr, num){
    let left = 0;
    let right = arr.length-1;
    let middle;
    while(left <= right){
        middle = Math.floor(right - left / 2);
        if(arr[middle]=== num){
            return middle;
        } else if (arr[middle] < num){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return null;
}

console.log(BinarySort(["a","b","c","x","y","z"], "h"));