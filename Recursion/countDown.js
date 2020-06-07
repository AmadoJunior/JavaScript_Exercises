//Iteratively
function countDownNaive(num){
    for(let i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done");
}

//Recursive
function countDown(num){
    if(num <= 0){
        console.log("All done");
        //return in order to break out of the function
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(10);