



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

        if (f >= 2 && i < num) {
            arr.push(parseInt(f + '' + (f - 1)));
            arr.push(parseInt(f + '' + (f + 1)));
            i = parseInt(f + '' + (f + 1));
        } else if (f == 0) {
            arr.push(10);
            i++;
        } else {
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
    var MIN = Math.pow(10, K - 1);

    // MIN is the result
    if (MIN % X == 0) {
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


// Dynamic Programming | Set 28 (Minimum insertions to form a palindrome)
// http://www.geeksforgeeks.org/dynamic-programming-set-28-minimum-insertions-to-form-a-palindrome/

/*                                 var str = 'geeks';

                                findMinInsertionsDP(str, str.length);


                                function findMinInsertionsDP(str, n) {
                                    var tbl = [];

                                    for(var i = 0; i<n; i++){
                                        var tbl1 = [];
                                        for(var j = 0; i<n; i++){
                                            tbl1[j] = 0;
                                        }
                                        tbl[i] = tbl1;
                                    }
                                    var l, h, gap;

                                    // Fill the table
                                    for (gap = 1; gap < n; ++gap) {
                                        for (l = 0, h = gap; h < n; ++l, ++h) {
                                            tbl[l][h] = (str[l] == str[h]) ? table[l + 1][h - 1] : (min(tbl[l][h - 1], tbl[l + 1][h]) + 1);
                                        }
                                    }

                                    // Return minimum number of insertions for
                                    // str[0..n-1]
                                    return table[0][n - 1];
                                }

                                function min(a, b){
                                    return a < b ? a : b;
                                } */



console.log('\x1b[31m%s\x1b[0m', "=================")
// Wildcard Pattern Matching
// http://www.geeksforgeeks.org/wildcard-pattern-matching/

var str = "baaabab";

var pattern = "ba*a";
//str = str.replace(/\?.*/g,'')

//// empty pattern can only match with
// empty string
var n = str.length;
var m = pattern.length;

// lookup table for storing results of
// subproblems
var lookup = [];

// var arr = [];
// for (var i = 0; i < n + 1; i++) {
//     arr[i] = false;
// }
// initailze lookup table to false
for (var i = 0; i < n + 1; i++) {
    var arr = [];
    for (var j = 0; j < n + 1; j++) {
        arr[j] = false;
    }
    lookup[i] = arr;
}
lookup[0][0] = true;

// fill the table in bottom-up fashion
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
        //          // Two cases if we see a '*'
        //          // a) We ignore '*'' character and move
        //          //    to next  character in the pattern,
        //          //     i.e., '*' indicates an empty sequence.
        //          // b) '*' character matches with ith
        //          //     character in input
        if (pattern.charAt(j - 1) == '*')
            lookup[i][j] = lookup[i][j - 1] ||
                lookup[i - 1][j];

        //          // Current characters are considered as
        //          // matching in two cases
        //          // (a) current character of pattern is '?'
        //          // (b) characters actually match
        else if (pattern.charAt(j - 1) == '?' ||
            str.charAt(i - 1) == pattern.charAt(j - 1))
            lookup[i][j] = lookup[i - 1][j - 1];

        //          // If characters don't match
        else lookup[i][j] = false;
    }
}

// return lookup[n][m];


var util = require('util');
//console.log(util.inspect(lookup, { showHidden: true, depth: null, colors: true }))











//  // http://www.geeksforgeeks.org/generating-distinct-subsequences-of-a-given-string-in-lexicographic-order/

//                                 // Finds and stores result in st for a given
//                                 // string s.
//                                 var st = new Set();
//                                 function subsequence(str) {

                                    
//                                     // iterate over the entire string
//                                     for (var i = 0; i < str.length; i++) {

//                                         // iterate from the end of the string
//                                         // to generate substrings
//                                         for (var j = str.length; j > i; j--) {
//                                             var sub_str = str.substring(i, j);

//                                             if (!st.has(sub_str))
//                                                 st.add(sub_str);

//                                             // drop kth character in the substring
//                                             // and if its not in the set then recur
//                                             for (var k = 1; k < sub_str.length - 1; k++) {
//                                                 var sb = sub_str;

//                                                 // drop character from the string
//                                                 sb.replace(sb.charAt(k), '');
//                                                 if (st.has(sb)){
//                                                     subsequence(sb.toString());
//                                                 }
//                                             }
//                                         }
//                                     }

//                                 }
//                                 var s = "xyz";

//                                 subsequence(s)