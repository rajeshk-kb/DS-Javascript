/* Dynamic Programming | Set 7 (Coin Change)
*/
// https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/

// https://www.youtube.com/watch?v=PafJOaMzstY



var arr = [1, 2, 3];
var N = 4;;

var no_of_ways = count(arr, N, N);

console.log(no_of_ways)





function count(arr, m, n) {

    var table = new Array(n+1);
    for (i = 0; i <=m; i++) {
        table[i] = new Array(m+1);
        for (j = 0; j <=m; j++) {
            table[i][j] = 0;
        }
    }

    table[0][0] = 1;

    for (var i = 1; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i > j) {
                table[i][j] = table[i - 1][j]
            } else {
                table[i][j] = table[i - 1][j] + table[i][j - i];
            }
        }
    }
    // console.log(table[3][0])
    console.log('===============')
    console.log(table)
    var op = table[arr.length][m];

    return op;
}