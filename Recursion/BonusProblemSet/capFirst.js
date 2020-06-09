/**
 * Write  a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter
 * of each string in the array.
 */

function capitalizeFirst(arr){
    let result = [];
    function helper(input){
        if(input.length <= 0){
            return;
        }
        let curWord = input[0].charAt(0).toUpperCase() + input[0].slice(1);
        result.push(curWord);
        helper(input.slice(1));
    }
    helper(arr);
    return result;
}

console.log(capitalizeFirst(["hello", "world"]));