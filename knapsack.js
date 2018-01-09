// https://www.geeksforgeeks.org/knapsack-problem/

// Dynamic Programming | Set 10 ( 0-1 Knapsack Problem)

var value = [1, 4, 4, 5, 7];
var weight = [1, 2, 3, 4, 5];
var W = 9;

var K = [];

for (var i = 0; i <= value.length; i++) {
    var arr = [];
    for (var j = 0; j <= W; j++) {
        arr[j] = 0;
    }
    K[i] = arr;
}

for (var i = 0; i <= value.length; i++) {
    for (var w = 0; w <= W; w++) {
        if (i == 0 || w == 0) {
            K[i][w] = 0;
        } else if (weight[i-1] > w) {
            K[i][w] = K[i - 1][w]
        } else {
            K[i][w] = Math.max(K[i - 1][w], (value[i - 1] + K[i - 1][(w - weight[i - 1])]));
        }
    }
}

console.log(K)

console.log('\nResult  - '+K[5][9])

// Time Complexity -- O(nW), where n-- length of values array;
