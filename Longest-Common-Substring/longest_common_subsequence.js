// Longest Common Subsequence
// Input : X = "aggtab", y = "gxtxayb"
// Output : 4
// The longest common subsequence is "gtab" and is of length 4.

class longestCommonString {
    // Dynamic Programming METHOD ==> O(nxm)
    lcsDP(X, Y, m, n) {
        // Create a table to store lengths of longest common substring of substrings;
        let L = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

        /* Following steps build L[m+1][n+1] in bottom up fashion. Note 
             that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1] */
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (X.charAt(i - 1) == Y.charAt(j - 1))
                    L[i][j] = L[i - 1][j - 1] + 1;
                else
                    L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
            }
        }
        console.log("Length of LCS is", L[m][n])
        this.printLCSub(X, Y, L, m, n);
        // return L[m][n];
    }

    // Print longest common subsequence
    printLCSub(X, Y, lcs2D, m, n) {
        let result = [];
        while (m >= 0 && n >= 0) {
            // IF the character in both X and Y at position m and n are same then
            // current character is part of LCS 
            if (X.charAt(m - 1) == Y.charAt(n - 1)) {
                result.unshift(X.charAt(m - 1))
                m--;
                n--;
            } else {
                // If not same, then find the larger of two and 
                // go in the direction of larger value 
                lcs2D[m - 1][n] > lcs2D[m][n - 1] ? m-- : n--;
            }

        }
        console.log(result.join('') ? result.join('') : 'Not found')
    }
}

/* let X = "aggtab";
let Y = "gxtxayb"; */

let X = "ABCDGH";
let Y = "AEDFHR";

let m = X.length;
let n = Y.length;
var lcs = new longestCommonString();

lcs.lcsDP(X, Y, m, n, 0)
// console.log(lcs.lcsDP(X, Y, m, n, 0));