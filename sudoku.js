// Solve Sudoku
// https://www.geeksforgeeks.org/backtracking-set-7-suduku/

var util = require('util')

// 0 means unassigned cells
var grid = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
            [5, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 7, 0, 0, 0, 0, 3, 1],
            [0, 0, 3, 0, 1, 0, 0, 8, 0],
            [9, 0, 0, 8, 6, 3, 0, 0, 5],
            [0, 5, 0, 0, 9, 0, 6, 0, 0],
            [1, 3, 0, 0, 0, 0, 2, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 4],
            [0, 0, 5, 2, 0, 6, 3, 0, 0]];

var N = 9;

// console.log(grid)

//console.log(util.inspect(grid, { showHidden: true, colors: true }))

for (var g in grid) {
    var str = '';
    for (var g1 in grid[g]) {
        var d = (g1 == 2 || g1 == 5) ? ' | ' : g1 != 8 ? ', ' : ''
        str = str + grid[g][g1] + d
    }
    if ((g == 3 || g == 6)) {
        console.log('- - - - - - - - - - - - - - ')
    }
    console.log(str)
}







console.log('\x1b[31m%s\x1b[0m', "=================")

var row = 0;
var col = 0;
// recursive algo
function solveSudoku(grid, row, col) {
    var cell = findUnassignedLocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    // base case: if no empty cell  
    if (row == -1) {
        console.log("solved");
        printGrid(grid);
        return true;
    }

    for (var num = 1; num <= N; num++) {

        if (noConflicts(grid, row, col, num)) {
            //console.log(grid[row][col]) 
            grid[row][col] = num;

            if (solveSudoku(grid, row, col)) {
                return true;
            }

            // mark cell as empty (with 0)    
            grid[row][col] = 0;
        }
    }

    // trigger back tracking
    return false;
}

solveSudoku(grid, row, col);

function findUnassignedLocation(grid, row, col) {
    var done = false;
    var res = [-1, -1];

    while (!done) {
        if (row == N) {
            done = true;
        }
        else {
            if (grid[row][col] == 0) {
                res[0] = row;
                res[1] = col;
                done = true;
            } else {
                if (col < 8) {
                    col++;
                }
                else {
                    row++;
                    col = 0;
                }
            }
        }
    }
    return res;
}

function noConflicts(grid, row, col, num) {
    return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

function isRowOk(grid, row, num) {
    for (var col = 0; col < N; col++)
        if (grid[row][col] == num)
            return false;

    return true;
}
function isColOk(grid, col, num) {
    for (var row = 0; row < N; row++)
        if (grid[row][col] == num)
            return false;

    return true;
}
function isBoxOk(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (grid[row + r][col + c] == num)
                return false;

    return true;
}

function printGrid(grid) {
    for (var g in grid) {
        var str = '';
        for (var g1 in grid[g]) {
            var d = (g1 == 2 || g1 == 5) ? ' | ' : g1 != 8 ? ', ' : ''
            str = str + grid[g][g1] + d
        }
        if ((g == 3 || g == 6)) {
            console.log('- - - - - - - - - - - - - - ')
        }
        console.log(str)
    }
    // console.log(util.inspect(grid, { showHidden: true, colors: true }))
}

// --------- INPUT ----------
// 3, 0, 6 | 5, 0, 8 | 4, 0, 0
// 5, 2, 0 | 0, 0, 0 | 0, 0, 0
// 0, 8, 7 | 0, 0, 0 | 0, 3, 1
// - - - - - - - - - - - - - - 
// 0, 0, 3 | 0, 1, 0 | 0, 8, 0
// 9, 0, 0 | 8, 6, 3 | 0, 0, 5
// 0, 5, 0 | 0, 9, 0 | 6, 0, 0
// - - - - - - - - - - - - - - 
// 1, 3, 0 | 0, 0, 0 | 2, 5, 0
// 0, 0, 0 | 0, 0, 0 | 0, 7, 4
// 0, 0, 5 | 2, 0, 6 | 3, 0, 0

// --------- OUTPUT ----------
// 3, 1, 6 | 5, 7, 8 | 4, 9, 2
// 5, 2, 9 | 1, 3, 4 | 7, 6, 8
// 4, 8, 7 | 6, 2, 9 | 5, 3, 1
// - - - - - - - - - - - - - - 
// 2, 6, 3 | 4, 1, 5 | 9, 8, 7
// 9, 7, 4 | 8, 6, 3 | 1, 2, 5
// 8, 5, 1 | 7, 9, 2 | 6, 4, 3
// - - - - - - - - - - - - - - 
// 1, 3, 8 | 9, 4, 7 | 2, 5, 6
// 6, 9, 2 | 3, 5, 1 | 8, 7, 4
// 7, 4, 5 | 2, 8, 6 | 3, 1, 9