// Longest Palindromic Subsequence

// https://www.geeksforgeeks.org/dynamic-programming-set-12-longest-palindromic-subsequence/
// https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/
var str = "adbbca";

var n = str.length;
var L = [];

// Create a empty 2-D array with default value 1.
for (var i = 0; i < n; i++) {
    var arr = [];
    for (var j = 0; j < n; j++) {
        arr[j] = 1;
    }
    L[i] = arr;
}

// Build the table. Note that the lower diagonal values of table are
// useless and not filled in the process
for (var cl = 2; cl <= n; cl++) {
    for (var i = 0; i < n - cl + 1; i++) {
        var j = i + cl - 1;
        if (str[i] == str[j] && cl == 2){
            L[i][j] = 2;
        }else if (str[i] == str[j]){
            L[i][j] = L[i + 1][j - 1] + 2;
        }else{
            L[i][j] = max(L[i][j - 1], L[i + 1][j]);
        }
    }
}

// console.log(L)
console.log(L[0][n-1])

function max(x, y){
    return x>y?x:y;
}
