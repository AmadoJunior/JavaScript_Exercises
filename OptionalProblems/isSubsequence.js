/**
 * Write a function called isSubsequence whic takes in two strings and checks
 * whether the characters in the first string form a subsequence of the chars
 * in the second string. In other words, the function should check whether
 * the characters in the first string appear somewhere in the second string
 * without their order changing.
 */

 //Multiple Pointers Solution: Time O(N + M), Space O(1)
function isSubsequence(subsequence, str) {
    if(!subsequence) return true;
    let j = 0;
    let i = 0;
    while(j < str.length){
        if(str[j] === subsequence[i]){
            i++;
        }
        if(i === subsequence.length){
            return true;
        }
        j++;
    }
    return false;
}

console.log(isSubsequence("abc", "abracadabra"));