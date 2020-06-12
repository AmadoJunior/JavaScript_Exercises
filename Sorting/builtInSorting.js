function numberCompare(num1, num2){
    return num1 - num2;
}
function compareByLen(str1, str2){
    return str1.length - str2.length;
}
/**
 * The built in javascript sort method sort everything as strings
 * using character unicode in order to compare. Works great to sort
 * string in alphabetical order but does not work for numbers out of the box
 * 
 * 
 * Telling JavaScript how to sort:
 * -The built-in sort method accepts an optional comparator function.
 * -You can use this comparator function to tell JS how you want it
 * to sort
 * -The comparator looks at pairs of elements(a and b),
 * determines their sort order based on the return values
 *  -If it returns a negative nubmers, a should come before b
 *  -If it returns a positive number, a should come after b
 */
console.log( [6, 4, 15, 10].sort(numberCompare) );
console.log( ["Hello", "Hi"].sort(compareByLen) );