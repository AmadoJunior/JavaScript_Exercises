/**
 * Write a function called collectStrings which accepts an object and returns
 * an array of all the values in the object that have a typeof string.
 */

function collectStrings(obj){
    let result = [];

    function helper(input){
        for(let key in input){
            if(typeof input[key] === "string"){
                result.push(input[key])
            } else if(typeof input[key] === "object"){
                helper(input[key])
            }
        }
    }

    helper(obj);
    return result;
}

//Tests
const testObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(testObj));