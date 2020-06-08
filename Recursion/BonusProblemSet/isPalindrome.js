/**
 * Write a recursive function called isPalindrome which returns true if the stirng passed
 * to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */
function isPalindrome(str){
    function helper(helperInput){
        if(helperInput.length === 1){
            return helperInput[0];
        }
        return helperInput[helperInput.length-1] + helper(helperInput.substring(0,helperInput.length-1));
    }
    return str === helper(str) ? true : false;
}

console.log(isPalindrome("tacoca"));