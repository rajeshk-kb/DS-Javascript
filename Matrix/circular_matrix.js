/* The class Circular_Matrix creates a Square Matrix of size n*n and fills it in a circular fashion
*/
/*
 * r1i [c1     c2]
 * jc2 [r1+1     r2]
 * r2i [c2-1   c1]
 * jc1 [r2-1  r1+1]
 * */
 
(function () {
    var n = 10;
    var A = [];

    var k = 1, c1 = 0, c2 = n - 1, r1 = 0, r2 = n - 1;

    for (var i = 0; i < n; i++) {
        var rs = [];
      //  for (var j = 0; j < n; j++) {
      //      rs.push(0);
      //  }
        var flags = new Uint8Array(n); //all is initialized by 0 
        A.push(flags);
    }

    while (k <= n * n) {

        for (var i = c1; i <= c2; i++) {
            A[r1][i] = k++;
        }
        for (var j = r1 + 1; j <= r2; j++) {
            A[j][c2] = k++;
        }

        for (var i = c2 - 1; i >= c1; i--) {
            A[r2][i] = k++;
        }
        for (var j = r2 - 1; j >= r1 + 1; j--) {
            A[j][c1] = k++;
        }
        c1++;
        c2--;
        r1++;
        r2--;
    }
    console.log(A)
})();






//https://www.geeksforgeeks.org/circular-matrix-construct-a-matrix-with-numbers-1-to-mn-in-spiral-way/


// Trick

        // m = row
        // n = col
        // k = start row
        // l = start col

        //                                      -- l to n --
        //                                         k++
        //                                 --------------------->
        //                                 /\                   |
        //                                 |                    |
        //               -- m-1 to r --    |                    | -- k to m --
        //                    l++          |                    |    n--
        //                                 |                    |
        //                                 |                    |
        //                                 |                    |
        //                                 |                    \/
        //                                 --------------------->
        //                                      -- n-1 to l --
        //                                         m--










