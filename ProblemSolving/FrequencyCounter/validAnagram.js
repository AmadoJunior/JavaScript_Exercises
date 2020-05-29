
/**
 * Anagrams
 * Given two string, write a function to determine if the second string is an 
 * anagram of the first. And anagram is a word, phrase, or name formed by 
 * rearranging the letters of another, shuch as "cinema", formed from "iceman"
 */


/**
 * In my own words:
 * Need to check if contain the same characters with the same frequencybundleRenderer.renderToStream
 * 
 * Simple examples:
 * validAnagram("azz", "zza") => false
 * validAnagram("anagram", "nagaram") => true
 * 
 * Break it down:
 * 1. Check if words are the same length
 * 2. Create an object which we will populate with a key for each char in the string1
 * and increment the values of those keys if the element is repeated
 * 3. Loop through the second string and first check if that char is not 
 * present in the frequencyCounter keys or is equal to zero, in which case
 * we return false.
 * 4. substract one from each key value every time we encounter the key in the string
 * in order to keep track of frequency. If a key reaches 0 and appears again in the
 * string then it willl return false
 */


 function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    let frequencyCounter = {};

    for(let char of str1){
        frequencyCounter[char] ? frequencyCounter[char] += 1 : frequencyCounter[char] =1;
    }

    for(let char of str2){
        //Checks if key is not present or is equal to zero, return false if so.
        if(!(frequencyCounter[char])){
            return false;
        } else {
            frequencyCounter[char]--;
        }
    }
    return true;
 }

 console.log(validAnagram("nagaram", "anagram"));