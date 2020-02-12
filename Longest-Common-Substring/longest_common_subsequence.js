// Longest Common Substring
// Input : X = "AGGTAB", y = "GXTXAYB"
// Output : 5
// The longest common substring is “Geeks” and is of length 5.

class GFG {

    // Recursion Method
    // Returns length of function for longest common  
    // substring of X[0..m-1] and Y[0..n-1]  
    lcsRec(X, Y, i, j, count) {
        // base case
        if(i == 0 || j == 0){
            return count;
        }
        if(X.charAt(i-1) == Y.charAt(j-1)){
            count = this.lcsRec(X, Y, i-1, j-1, count+1);
        }
        count = Math.max(count, (Math.max(
            this.lcsRec(X, Y, i, j-1, 0),
            this.lcsRec(X, Y, i-1, j, 0)
        )))
        return count;
    }

}

let X = "AGGTAB";
let Y = "GXTXAYB";
let m = X.length;
let n = Y.length;
var lcs = new GFG();

console.log("Length of LCS is  ", lcs.lcsRec(X, Y, m, n) ); 