const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please Enter a number : ', (answer) => {
    //console.log(`Thank you for your valuable feedback: ${answer}`);
    if(isArmstromg(answer)){
        console.log("Yes")
    }else{
        console.log("No")
    }
    rl.close();
});


function isArmstromg(number) {
    
    var armstrong = number;
    var result = 0;

    while (parseInt(armstrong) != 0) {
        var remender = parseInt(armstrong) % 10;
        result = result + remender * remender * remender;
        armstrong = armstrong / 10;
    }

    if (number == result) {
        return true;
    }
    return false;
}