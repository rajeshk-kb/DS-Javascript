/////       AMAZON
// Dynamic Programming | Set 3 (Longest Increasing Subsequence
// https://www.geeksforgeeks.org/longest-increasing-subsequence/


class longestCommonString {
    lisDP(arr, m) { // O(n^2)

        let lis = Array(m).fill(1);
        for (let i = 1; i < m; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[ij] < arr[i] && lis[i] < lis[j] + 1)
                    lis[i] = lis[j] + 1;
            }
        }
        console.log("Length of LIS is", lis[m - 1])
    }
}

var lcs = new longestCommonString();

var arr = [10, 22, 9, 33, 21, 50, 41, 60];
lcs.lisDP(arr, arr.length)