// Backtracking | Set 2 (Rat in a Maze)
// https://www.geeksforgeeks.org/backttracking-set-2-rat-in-a-maze/

var util = require('util')

var board =    [[1, 0, 0, 0],
                [1, 1, 0, 1],
                [0, 1, 1, 0],
                [1, 0, 1, 1]];

var N = 4;
var sol =  [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]];

// console.log(util.inspect(board, { showHidden: true, colors: true }))
function solveNQUtil(board, row, col, sol) {
    if (col == N - 1 && row == N - 1) {
        sol[row][col] = 7;
        console.log(util.inspect(sol, { showHidden: true, colors: true }))
        return true; // remove this in case of finding all possible solutions
    }

    if (isSafe(board, row, col)) {
        sol[row][col] = 7;

        if (solveNQUtil(board, row + 1, col, sol)) {
            return true;
        }
        if (solveNQUtil(board, row, col + 1, sol)) {
            return true;
        }
        sol[row][col] = 0;
    }
    return false;
}

solveNQUtil(board, 0, 0, sol);


function isSafe(board, x, y) {
    var i, j;
    if (x >= 0 && x < N && y >= 0 && y < N && board[x][y] == 1)
        return true;
    return false;
}

