const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please Enter a sting : ', (answer) => {
    console.log(getPermutation(answer))
});


const hs = [];
function getPermutation(str) {
    console.log("___________________  Output  ____________________")
    console.log("Permutations are :")
    permute("", str);
    console.log(hs.join('\n'));
}


function permute(bs, es) {
    if (es.length <= 1) {
        var s = bs + es;
        hs.push(s);
    } else {
        for (var i = 0; i < es.length; i++) {
            var newString = es.substring(0, i) + es.substring(i + 1);
            permute(bs + es.charAt(i), newString);
        }
    }
}
