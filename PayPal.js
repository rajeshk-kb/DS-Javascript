// PayPal

// Replace element of an Array with nearest bigger number at right side of the Array in O(n) 
// For example if the input Array is 
// 7, 5, 6, 3, 4, 1, 2, 9, 11 
// output array should be 
// 9, 6, 9, 4, 9, 2, 9, 11, 11

var arr = [7, 5, 6, 3, 4, 1, 2, 9, 11];

var N = arr.length;
var S = [];
var result =[];
for( i = N-1; i>=0; i-- )  
{
    while(arr[i] >= S[S.length-1] )  //try to find > a[i] element
        S.pop();

        result[i]= S[S.length-1];    //this was > a[i] to right
 
    S.push(arr[i]);  
}

console.log(S)
console.log(result)