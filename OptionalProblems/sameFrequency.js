/**
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbres have thesame frequency of digits.
 * ~ Must have O(N) time complexity.
 */

function sameFrequency(num1, num2){
    let one = num1.toString();
    let two = num2.toString();
    
    if(one.length !== two.length){
        return false;
    }
    
    let freqCounter1 = {};
    let freqCounter2 = {};
    
    for(let char of one){
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    for(let char of two){
        freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }
    for(let key in freqCounter1){
        if(freqCounter1[key] !== freqCounter2[key]){
            return false;
        }
    }
    return true;
}
