const readline = require('readline');

const r1 = readline.createInterface({
  input : process.stdin,
  output:process.stdout
});


r1.question('Enter your word ? : ', (value)=>{
    console.log('Your reversed word : '+reverseWords(value));
})



function reverseWords(value){
    console.log("___________________  Output  ____________________")

    var strArray = value.split(' ');

    console.log(strArray.length)
    
    for(var i=0; i<strArray.length/2; i++){
       // console.log("///////")
        var temp = strArray[i];
        strArray[i] = strArray[strArray.length-1-i]
        strArray[strArray.length-1-i] = temp;
    }

    return strArray.join(' ')
}