/**
 * Write a function called capitalizeWords. Given an array of words, return a new array
 * containing each word capitalized.
 */

function capitalizeWords(arr){
    let result = [];
    function helper(input){
        if(input.length <= 0){
            return;
        }
        result.push(input[0].toUpperCase());
        helper(input.slice(1));
    }
    helper(arr);
    return result;
}

//Test
console.log(capitalizeWords(["yep", "yup"]));