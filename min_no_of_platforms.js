

var arr = [9.00, 9.40, 9.50, 11.00, 15.00, 18.00]
var dep = [9.10, 12.00, 11.20, 11.30, 19.00, 20.00]

var i = 1, j = 0;
var plat_needed = 1;
var result = 1;
var len = arr.length;

while (i < len && j < len) {
    if (dep[j] >= arr[i]) {
        i++;
        plat_needed++;
        if (plat_needed > result) {
            result = plat_needed;
        }
    } else {
        plat_needed--;
        j++;
    }
};
console.log('Platforms needed -- ', result);