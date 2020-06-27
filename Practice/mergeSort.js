function swap(arr, index1, index2){
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function sortArr(arr1, arr2){
    let i = 0;
    let j = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        } else if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
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

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return sortArr(left, right);
}

console.log(mergeSort([3,2,1]));