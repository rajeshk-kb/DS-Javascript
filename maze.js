// Backtracking | Set 2 (Rat in a Maze)
// https://www.geeksforgeeks.org/backttracking-set-2-rat-in-a-maze/

var util = require('util')

// 0 means unassigned cells
var board =    [[1, 0, 0, 0],
                [1, 1, 0, 1],
                [0, 1, 1, 0],
                [1, 0, 1, 1]];

var N = 4;
// 0 means unassigned cells
var sol =  [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]];

// console.log(util.inspect(board, { showHidden: true, colors: true }))
console.log('\x1b[31m%s\x1b[0m', "=================")
function solveNQUtil(board, row, col) {
    if (col == N - 1 && row == N - 1) {
        sol[col][col] = 7;
        console.log(util.inspect(sol, { showHidden: true, colors: true }))
        return true; // remove this in case of finding all possible solutions
    }

    //for(var i = 0; i< N; i++){
    if (isSafe(board, row, col)) {
        sol[row][col] = 7;

        if (solveNQUtil(board, row + 1, col, sol)) {
            return true;
        }
        if (solveNQUtil(board, row, col + 1, sol)) {
            return true;
        }
        sol[row][col] = 0;
       // return false;
    }

    return false;
    // }
}

solveNQUtil(board, 0, 0, sol);



function isSafe(board, x, y) {
    var i, j;
    // if (x,y outside maze) return false
    if (x >= 0 && x < N && y >= 0 && y < N && board[x][y] == 1)
        return true;

    return false;
}

