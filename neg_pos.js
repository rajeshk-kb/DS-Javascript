// https://www.geeksforgeeks.org/rearrange-positive-and-negative-numbers-publish/
// Rearrange positive and negative numbers in O(n) time and O(1) extra space
// Amazon


var arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

var k = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<0){
        var temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
        k++;
    } 
}
var neg = 0;
var pos = k;
while(neg<pos && pos<arr.length){
    var temp = arr[neg];
        arr[neg] = arr[pos];
        arr[pos] = temp;
        neg = neg+2;
        pos = pos+1;
}
console.log(arr)
// Output : [ 4, -3, 5, -1, 6, -7, 2, 8, 9 ]