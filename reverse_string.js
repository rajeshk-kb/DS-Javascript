const readline = require('readline');

const r1 = readline.createInterface({
  input : process.stdin,
  output:process.stdout
});


r1.question('Enter a string ? : ', (value)=>{
   console.log('Your reversed string : '+reverseString(value));
   // console.log('Your reversed string by resursion: '+reverseStringByRecursion(value.split(''), 0, value.length));
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

// By recursion method
/*function reverseStringByRecursion(value, start, length) {
    var temp = value[start];
    if (start !== length / 2) {
        value[start] = value[length - start - 1];
        value[length - start - 1] = temp;
        reverseString(value, start + 1, length);
    }
    return value.join('');
}*/