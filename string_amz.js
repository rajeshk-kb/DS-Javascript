// Wildcard Pattern Matching
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








// Rearrange characters in a string such that no two adjacent are same
// https://www.geeksforgeeks.org/rearrange-characters-string-no-two-adjacent/

var str = 'aaabbbbcc';
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


for(var k in  count){
    queue.push(String.fromCharCode(97+parseInt(k)), count[k])
}


console.log(queue)
while (queue.size()) {
     console.log(queue.pop())
}


