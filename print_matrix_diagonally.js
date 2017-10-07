// Amazon

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

    console.log(matrix)

    printDiagonally(matrix, 5, 5)
})();

// The main function that prints given matrix in diagonal order
function printDiagonally(matrix, ROW, COL){
    // first half
    for (var i = 0; i<ROW; i++){
        var s = "";
        var k = 0;
        for(var j = 0; j<=i; j++){
            s += matrix[i-k][j] +" ";
            k++;
        }
        console.log(s)
    }
    // first half
    for (var i = 1; i<COL; i++){
        var s = "";
        var k = 0;
        for(var j = ROW-1; j>=i; j--){
            s += matrix[j][i+k] +" ";
            k++;
        }
        console.log(s)
    }
}