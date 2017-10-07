



// Amazon Set 404
// Given a positive number, find all the nos that holds the property of all the 
// digits with absolute difference equal to 1 to its adjacent digit below that given number.
(function (num) {
    var arr = [];
    /* for (var i = 10; i < num; i++) {
        var sp = i.toString().split('');
        var diff = parseInt(sp[0]) - parseInt(sp[1]);
        if(diff === 1 || diff === -1){
            arr.push(i);
        }
    } */
    for (var i = 10; i < num; i++) {
        console.log(i)
        var sp = i.toString().split('');
        var f = parseInt(sp[0]);
        var f = parseInt(sp[1]);

        if(f>=2 && i<num){
            arr.push(parseInt(f+''+(f-1)));
            arr.push(parseInt(f+''+(f+1)));
            i = parseInt(f+''+(f+1));
        }else if(f == 0){
            arr.push(10);
            i++;
        }else{
            i++
        }
    }

    console.log(arr)
    
})(40);




(function (X, K) {
/*     var max = X*1000;

    for (var i = 10000; i < max; i++) {
       if(i%X == 0){
        console.log(i)
        return;
       } */
   // }
    // Computing MIN
    var MIN = Math.pow(10, K-1);

    // MIN is the result
    if (MIN % X == 0){
        console.log(MIN)
        return MIN;
    }

    // returning ans
    console.log((MIN + X) % X)
    console.log((MIN + X) - ((MIN + X) % X))
    return ((MIN + X) - ((MIN + X) % X));


    //console.log(arr)
})(83, 5);


// Program to Print Matrix in Z form
/* (function () {

    var matrix = [];
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

    var row = matrix.length;
    var col = matrix.length;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if(i == 0 || i == row-1){
                console.log(matrix[i][j]);
            }else{
                console.log(matrix[i][col-1-i]);
                break;
            }
        }
    }
})(); */