/* Rotate a matrix by 90 degree */
var matrix = [];
(function () {

    var k = 1;
    for (var i = 0; i < 5; i++) {
        var mat = [];
        for (var j = 0; j < 5; j++) {
            mat.push(k);
            k++;
        }
        matrix.push(mat);
    }

})();

console.log("--------  Matrix -----")
console.log(matrix)
transposeOfMatrix(matrix);


function transposeOfMatrix(matrix) {

    var row = matrix.length;
    var col = matrix.length;
    for (var i = 0; i < row; i++) {
        for (var j = i; j < col; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp;
        }
    }

    console.log("-------- Transpose of matrix -----")
    console.log(matrix)
    reverseColms(matrix)
}

function reverseColms(matrix) {

    var row = matrix.length;
    var col = matrix.length;
    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row / 2; j++) {
            var temp = matrix[j][i];
            matrix[j][i] = matrix[row - 1 - j][i];
            matrix[row - 1 - j][i] = temp;
        }
    }
    console.log("-------- Reversed matrix -----")
    console.log(matrix)
}

