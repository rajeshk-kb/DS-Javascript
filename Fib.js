const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please Enter a number : ', (answer) => {
    console.log(createFibSearies(answer))
});


function createFibSearies(number) {
   console.log("___________________  Output  ____________________")
   var arr = new Array(parseInt(number));

   arr[0] = 0;
   arr[1] = 1;
   if(parseInt(number) == 0){
       return 0;
   }
 
   for (var i=2; i<parseInt(number); i++){
        arr[i] = parseInt(arr[i-1])+parseInt(arr[i-2]);
   }

   return arr.join(' ');
} 