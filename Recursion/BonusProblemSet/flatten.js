/**
 * Write a recrusive function called flatten which accepts an array of arrays
 * and returns a new array with all values flattened.
 */

function flatten(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        //if current array item == array
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))