/**
 * Given n and m which are the dimensions of a matrix initialized by zeros 
 * and given an array indices where indices[i] = [ri, ci]. For each pair of 
 * [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying 
the increment to all indices.
 */

 /**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let result = [];
    let count = 0;
    for(let i = 0; i < n; i++){
        result.push([]);
        for(let j = 0; j < m; j++){
            result[i].push(0);
        }
    }
    console.log(result);
    for(let i = 0; i < indices.length; i++){
        for(let j = 0; j < m; j++){
            result[indices[i][0]][j]++;
        }
        console.log(result);
        for(let k = 0; k < n; k++){
            result[k][indices[i][1]]++;
        }
        console.log(result);
    }
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result[i].length; j++){
            if(result[i][j]%2 !== 0){
                count++;
            }
        }
    }
    return count;
};

console.log(oddCells(2,3, [[0,1],[1,1]]));