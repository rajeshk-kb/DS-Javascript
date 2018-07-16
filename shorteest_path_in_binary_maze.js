// https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/
// Shortest path in a Binary Maze

var ROW = 9
var COL = 10


var visited = [[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false]];




// These arrays are used to get row and column
// numbers of 4 neighbours of a given cell
var rowNum = [-1, 0, 0, 1];
var colNum = [0, -1, 1, 0];


// check whether given cell (row, col) is a valid
// cell or not.
function isValid(row, col) {
    // return true if row number and column number
    // is in range
    return (row >= 0) && (row < ROW) &&
        (col >= 0) && (col < COL);
}


// function to find the shortest path between
// a given source cell to a destination cell.
function BFS(mat, src, dest) {
    // check source and destination cell
    // of the matrix have value 1
    var int_max = 100000000;
    if (!mat[src.x][src.y] || !mat[dest.x][dest.y]) {
        return int_max;
    }

    // Mark the source cell as visited
    visited[0][0] = true;

    // Create a queue for BFS
    var q = new Array();
    var obj = [src, 0];
    q.unshift(obj);
    console.log(q)
    console.log('======')

    while (q.length != 0) {
        
        var curr = q[0];
        var pt = curr[0];

        // If we have reached the destination cell,
        // we are done
        if (pt.x == dest.x && pt.y == dest.y){
           // console.log(curr)
            return curr[1];
        }
            
        // Otherwise dequeue the front cell in the queue
        // and enqueue its adjacent cells
        q.pop();

        for (var i = 0; i < 4; i++) {
            var row = pt.x + rowNum[i];
            var col = pt.y + colNum[i];

            // if adjacent cell is valid, has path and
            // not visited yet, enqueue it.
            if (isValid(row, col) && mat[row][col] &&
                !visited[row][col]) {
                // mark cell as visited and enqueue it
                visited[row][col] = true;
                // var Adjcell = { {row, col},
                //     curr.dist + 1 };

                var Adjcell = [{ x: row, y: col }, curr[1] + 1];
                q.unshift(Adjcell);
                //console.log(i,   curr)
            }
        }
        console.log(q)
    }
    return int_max

    //    console.log(visited)
    //    memset(visited, false, sizeof visited);

}

var mat =
    [
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
    ];

var source = { x: 0, y: 0 };
var dest = { x: 3, y: 4 };

var dist = BFS(mat, source, dest);

console.log(dist)
console.log(visited)


// console.log('\x1b[31m%s\x1b[0m', "=================")
//console.log(util.inspect(abhijit, { showHidden: true, depth: null, colors: true }))