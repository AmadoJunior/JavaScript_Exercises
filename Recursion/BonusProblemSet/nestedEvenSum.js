/**
 * Write a recursive function called nesdtedEvenSum. Return the sum of all even 
 * numbers in an object which may contain nested objects.
 */

function isEven(num){
    return num % 2 === 0 ? true : false;
}

function nestedEvenSum(object, sum=0){
    for(let key in object){
        if(typeof object[key] === "object"){
            sum += nestedEvenSum(object[key]);
        } else if(typeof object[key] === "number" && isEven(object[key])){
            sum += object[key];
        }
    }
    return sum;
}

//Tests
var testObj = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  var testObj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

console.log(nestedEvenSum(testObj2));