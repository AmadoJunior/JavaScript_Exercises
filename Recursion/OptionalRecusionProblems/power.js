/**
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent.
 * This funciton should mimic the functionality of Math.pow().
 * Do not consider negative bases or exponents.
 */

 function power(base, exponent){
    if(exponent === 0){
        return 1;
    }

    return base * power(base, exponent-1);

 }

 console.log(power(4,2));