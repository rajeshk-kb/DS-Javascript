// 1. Wildcard Pattern Matching
// http://www.geeksforgeeks.org/wildcard-pattern-matching/

var str = "baaabab";

var pattern = "ba*a";
//str = str.replace(/\?.*/g,'')
var n = str.length;
var m = pattern.length;

var lookup = [];


for (var i = 0; i < n + 1; i++) {
    var arr = [];
    for (var j = 0; j < n + 1; j++) {
        arr[j] = false;
    }
    lookup[i] = arr;
}
lookup[0][0] = true;

// fill the table in bottom-up fashion
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {

        if (pattern.charAt(j - 1) == '*')
            lookup[i][j] = lookup[i][j - 1] ||
                lookup[i - 1][j];

        else if (pattern.charAt(j - 1) == '?' ||
            str.charAt(i - 1) == pattern.charAt(j - 1))
            lookup[i][j] = lookup[i - 1][j - 1];

        //          // If characters don't match
        else lookup[i][j] = false;
    }
}

// return lookup[n][m];


var util = require('util');
//console.log(util.inspect(lookup, { showHidden: true, depth: null, colors: true }))















// 2. Rearrange characters in a string such that no two adjacent are same
// https://www.geeksforgeeks.org/rearrange-characters-string-no-two-adjacent/

var str = 'aaaaabbbcc';
var ln = str.length;

var count = new Array(26);
var k = 0;

for (var i = 0; i < ln; i++) {
    var code = str.charCodeAt(i) - ('a'.charCodeAt(0));
    if (count[code])
        count[code]++;
    else
        count[code] = 1;
}

console.log(count)

// Example Implementation

function PriorityQueue() {
    this.data = []
}

PriorityQueue.prototype.push = function (element, priority) {
    //priority = priority
    //console.log(priority)
    for (var i = 0; i < this.data.length && this.data[i][1] > priority; i++);
    this.data.splice(i, 0, [element, priority])
}

PriorityQueue.prototype.pop = function () {
    return this.data.shift()[0]
}

PriorityQueue.prototype.size = function () {
    return this.data.length
}


// Example Usage:

var queue = new PriorityQueue()


for (var k in count) {
    queue.push(String.fromCharCode(97 + parseInt(k)), count[k])
}

console.log(queue)
var str2 = '';
var prev = ['#', -1];
while (queue.size()) {
    var key = queue.data[0];
    queue.pop();

    str2 = str2 + key[0];

    if (prev[1] > 0)
        queue.push(prev[0], prev[1]);

    key[1]--;
    prev = key;
}

if (str.length !== str2.length)
    console.log('not possible')
else
    console.log(str2)



    // Output  : ababacacab

    // -------- Explanation where : X --> Remove from queue, and f -- removed permanently 
    //              a   b   a   b   a                c   a   c   a   b
    // 1. a - 5 | - x - 4 - x - 3 - x              - 2 - x - 1 - x - R - R
    // 2. b - 3 | - 3 - x - 2 - x - 1 \/ 2. c  - 2 - x - 1 - x - R - R - R
    // c. c - 2 | - 2 - 2 - 2 - 2 - 2 /\ 3. b  - 1 - 1 - 1 - 1 - 1 - X - R
