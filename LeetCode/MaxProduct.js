/**
 * Given the array of integers nums, you will choose two different indices i and j
 *  of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1). 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = function(nums) {
    let greatest = -Infinity;
    let secondGreatest = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= greatest){
            secondGreatest = greatest;
            greatest = nums[i];
        } else if(secondGreatest < nums[i]) {
            secondGreatest = nums[i];
        }
    }
    return (greatest-1) * (secondGreatest-1);
};

console.log(maxProduct([3,4,5,2]));