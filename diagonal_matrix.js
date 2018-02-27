
// https://www.geeksforgeeks.org/zigzag-or-diagonal-traversal-of-matrix/




var arr =  [[1, 2, 3, 4,],
            [5, 6, 7, 8,],
            [9, 10, 11, 12,],
            [13, 14, 15, 16,],
            [17, 18, 19, 20,]];

var ROW = 5;
var COL = 4;

function diagonalOrder(arr){

        for (var line = 1; line <= (ROW+COL-1); line++) {

            var start_col = Math.max(0, line-ROW);

            var count = min(line, (COL-start_col), ROW)

            var temp_arr = [];
            for(var j = 0; j<count; j++){
                temp_arr.push(arr[Math.min(ROW, line)-j-1][start_col+j]);
                //console.log(arr[Math.min(ROW, i)-j-1][start_col])
            }
            console.log(temp_arr.join(' '));
        }
}   


diagonalOrder(arr);


function min(a, b, c){
 return Math.min(Math.min(a, b), c);
}