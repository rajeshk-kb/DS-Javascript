/* Dynamic Programming | Set 7 (Coin Change)
*/
// https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/

// https://www.youtube.com/watch?v=PafJOaMzstY




var arr = [1,2,3];
var N = 5;

var no_of_ways = count(arr, arr.length, N);

console.log(no_of_ways)





function count(arr, m, n) {


// Set value 0 in all boxes;
var table = new Array(n+1);
for (i = 0; i <=m; i++) {
    table[i] = new Array(m+1);
    for (j = 0; j <=n; j++) {
        table[i][j] = 0;
    }
}

// // Base case (If given value is 0)  
for(var i=0;i<m;i++) {
    table[0][i] = 1;  
 } 


 for(var i=1;i<=m;i++) { 

  for(var j=1;j<=n;j++) { 
      if(arr[i-1]>j) { 
          table[i][j]=table[i-1][j]; 

      } else{ 
          table[i][j]=table[i-1][j]+table[i][j-(i-1)]; 
      } 

  } 
} 


console.log(table)
var op = table[m][n]; // handle odd or even array length please

return op;
}



