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
console.log(util.inspect(lookup, { showHidden: true, depth: null, colors: true }))