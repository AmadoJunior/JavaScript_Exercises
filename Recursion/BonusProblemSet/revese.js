/**
 * Write a recrusive function called reverse which accepts a string and returns
 * a new string in reverse.
 */

function reverse(str){
    if(str.length === 1){
        return str[0];
    }
    return str[str.length-1] + reverse(str.substring(0,str.length-1));
}
//Using helper method so as to not modify given string
function reverseTest(str){
    let result = "";

    function helper(str){
        if(str.length === 1){
            return str[0];
        }
        return str[str.length-1] + helper(str.substring(0,str.length-1));
    }

    result = helper(str);
    return result;
}


console.log(reverseTest("rithmschool"));