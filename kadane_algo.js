
// Largest Sum Contiguous Subarray


// 0   1   2  3  4  5   6   7  8  9  10  11  12 13 14 15
var arr = [4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -2, -1, 3, 1, 2];

var max_so_far = arr[0];
var max_ending_here = 0;
var start = 0;
var end = 0;
for (let i = 1; i < arr.length; i++) {

    max_ending_here = max_ending_here + arr[i];
    if (max_ending_here > max_so_far) {
        end = i;
        start = s;
        max_so_far = max_ending_here;
    }

    if (max_ending_here < 0) {
        max_ending_here = 0;
        s = i + 1;
    }

}

console.log(max_so_far)
console.log(end)
console.log(start)
