// https://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/

// Print Concatenation of Zig-Zag String in ‘n’ Rows

// var str = "ABCDEFGH";


var str = "GEEKSFORGEEKS";

var ln = str.length;
var n = 3;
if (n == 1) {
    console.log(str)
    return;
}

var arr = [];
var row = 0;
var down = true;
for (var i = 0; i < ln; i++) {

    i<=n ? arr.push(str.charAt(i)) : arr[row] = arr[row]+str.charAt(i);
    
    if (row == n - 1) {
        down = false;
    } else if (row == 0) {
        down = true;
    }
    down ? row ++ : row--;
}
console.log(arr.join(''))



// output : GSGSEKFREKEOE
// G       S       G       S
//   E   K   F   R   E   K
//     E       O       E