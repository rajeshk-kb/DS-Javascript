



// Amazon Set 404
// Given a positive number, find all the nos that holds the property of all the 
// digits with absolute difference equal to 1 to its adjacent digit below that given number.
(function (num) {
    var arr = [];
    /* for (var i = 10; i < num; i++) {
        var sp = i.toString().split('');
        var diff = parseInt(sp[0]) - parseInt(sp[1]);
        if(diff === 1 || diff === -1){
            arr.push(i);
        }
    } */
    for (var i = 10; i < num; i++) {
        //console.log(i)
        var sp = i.toString().split('');
        var f = parseInt(sp[0]);
        var f = parseInt(sp[1]);

        if (f >= 2 && i < num) {
            arr.push(parseInt(f + '' + (f - 1)));
            arr.push(parseInt(f + '' + (f + 1)));
            i = parseInt(f + '' + (f + 1));
        } else if (f == 0) {
            arr.push(10);
            i++;
        } else {
            i++
        }
    }

    // console.log(arr)

})(40);

console.log('\x1b[31m%s\x1b[0m', "=================");



var arr = [1, 2, 3, 7, 5];

var start = 0, end = 0;
var sum = 0;
var num = 12;

while (start < arr.length && end < arr.length) {

    if (sum < num) {
        sum = sum + arr[end];
        end++;
    } else if (sum > num) {
        sum = sum - arr[start];
        start++;
    } else {
        break;
    }
}

console.log(start, end-1)