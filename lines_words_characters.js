// PayPal

var fs = require('file-system')


fs.readFile("abc.txt", { encoding: 'utf8' }, function (err, data) {
    if (err) {
        console.log("err")
    } else {
        
        var lines  = data.split('\n');

        console.log(data.length); // No of Characters in file;

        console.log(lines.length); // No of lines;

        console.log(lines[lines.length-1]); // Last line

        console.log(lines[lines.length-1].split(' ').length); // No of words in Last line

        console.log(lines[lines.length-1].length); // No of characters in Last line
        
    }
});
