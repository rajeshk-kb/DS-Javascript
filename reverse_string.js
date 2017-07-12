const readline = require('readline');

const r1 = readline.createInterface({
  input : process.stdin,
  output:process.stdout
});


r1.question('Enter a string ? : ', (value)=>{
    console.log('Your reversed string : '+reverseString(value));
})



function reverseString(value){
    console.log("___________________  Output  ____________________")

    var strArray = value.split('');
    
    for(var i=0; i<value.length/2; i++){
        var temp = strArray[i];
        strArray[i] = strArray[value.length-1-i]
        strArray[value.length-1-i] = temp;
    }

    return strArray.join('')
}