const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please Enter a number : ', (answer) => {
    console.log(findMissing(answer))
});


function findMissing(number) {
    console.log("___________________  Output  ____________________")
    var arr = [0, 1, 2, 3, 4, 5, 6, 8, 9, 11]


    var n = arr.length-1;
    var sum = 0;
    for(var i = 0; i<n; i++){
        sum += arr[i];
    }

    var total = (n+1)*(n+1+1)/2;
console.log(sum)
console.log(total)
    return total - sum;
} 