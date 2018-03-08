// Replace every element by multiplication of previous and next element

// input == [3, 4, 5, 5, 7, 9, 8]
// output == [3x4, 3x6, 4x5, 6x7, 5x9, 7x8, 9x8]
//                   Or
// output == [12, 18, 20, 42, 45, 56, 72]


var arr = [3, 4, 6, 5, 7, 9, 8];

console.log(arr)

var pre = arr[0];
arr[0] = pre*arr[1];

for(var i = 1; i<arr.length-1; i++){
    var curr = arr[i];
    var next = arr[i+1];
    arr[i] = pre*next;
    pre = curr;
}
arr[arr.length-1] = pre*arr[arr.length-1];

console.log(arr)