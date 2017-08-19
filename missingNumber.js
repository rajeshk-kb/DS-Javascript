const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//rl.question('Please Enter a number : ', (answer) => {
    console.log(findMissing())
//});


function findMissing() {
    console.log("___________________  Output  ____________________")
    var arr = [1, 3, 2, 5, 4, 6, 7, 10, 8, 11]


    var n = arr.length;
    var sum = 0;
    for(var i = 0; i<n-1; i++){
        //sum += arr[i];
        if(arr.indexOf(i+1) == -1){
            return i+1;
        }
    }

   // var total = n*(n+1)/2;
  //  return total - sum;
} 