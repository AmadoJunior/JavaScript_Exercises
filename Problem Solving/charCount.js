/* 
Write a function which takes in a string and returns: 
Counts of each char in the string.
*/

//Write out simple examples and consider edge cases
charCount("aaaa");
/**
 * {
 *  h:1,
 *  e:1,
 *  l:2,
 *  o:1
 * }
 */
charCount("Your PIN number is 1234");
/**
 * {
 *  1: 1,
 *  2: 1,
 *  3: 1,
 *  4: 1,
 *  b: 1,
 *  e: 1,
 *  i: 2,
 *  m: 1,
 *  n: 2,
 *  o: 1,
 *  p: 1,
 *  r: 2,
 *  s: 1,
 *  u: 2,
 *  y: 1
 * }
 */

//Break it down
    /**
     * make object to return at end
     * loop over string, for each character
     *  check if char is number/letter AND a key in object, add one to count
     *  if the char is number/letter AND not in our object, add it and set value to 1
     *  if character is something (space, period, etc.) don't do anything
     * return object at end
     */
function charCount(str){
    let charObject = {};
    let regExp = /\w/;
    for(let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase();
        if(char.match(regExp)){
            if(charObject[char] > 0){
                charObject[char]++;
            } else {
                charObject[char] = 1;
            }
        } else {
            continue;
        }
        
    }
    return charObject;
}
console.log(charCount("Your PIN is 1234!"));