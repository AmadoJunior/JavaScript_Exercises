/**
 * Write a function called stringifyNumbers which takes in an object and finds all the
 * values which are numbers and converts them to strings.
 */

function stringifyNumbers(object){
    let result = {};

        for(let key in object){
            if(typeof object[key] === "object" && !Array.isArray(object[key])){
                result[key] = stringifyNumbers(object[key]);
            } else if(typeof object[key] === "number"){
                result[key] = object[key].toString();
            } else {
                result[key] = object[key];
            }
        }

    return result;
}

//Tests
testObj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(testObj));