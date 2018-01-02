// Backtracking | Set 3 (N Queen Problem)
// https://www.geeksforgeeks.org/backtracking-set-3-n-queen-problem/

var util = require('util')

// 0 means unassigned cells
var board = [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]];

var N = 4;


//console.log(util.inspect(board, { showHidden: true, colors: true }))





console.log('\x1b[31m%s\x1b[0m', "=================")


function solveNQUtil(board, col) {
    if (col == N) {
        console.log(util.inspect(board, { showHidden: true, colors: true }))
        return true; // remove this in case of finding all possible solutions
    }

    for(var i = 0; i< N; i++){
        if(isSafe(board, i, col)){
            board[i][col] = 1;

            if(solveNQUtil(board, col+1)){
                return true;
            }
            board[i][col] = 0;
        }
    }
}

solveNQUtil(board, 0);



function isSafe(board, row, col){
    var i, j;
    /* Check this row on left side */
    for(i = 0; i<col; i++){
        if(board[row][i]){
            return false;
        }
    }
    
    /* Check upper diagonal on left side */
    for(i = row, j = col; i>=0 && j>=0; i--, j--){
        if(board[i][j]){
            return false;
        }
    }

    /* Check lower diagonal on left side */
    for(i = row, j = col; j>=0 && i<N; i++, j--){
        if(board[i][j]){
            return false;
        }
    }
    return true;
}

