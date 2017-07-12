//var express = require('express');
//var app = express();
var fs = require('file-system')


fs.readFile("abc.txt", { encoding: 'utf8' }, function (err, data) {
    if (err) {
        console.log("err")
    } else {
        var s = "mai";
        var sortedString = s.split('').sort().join('');

        var lines = data.split('\n');

        for (var ln in lines) {
           var lines2 = lines[ln].split(' ')
           for(var ln2 in lines2){
                 var sortedString2 = lines2[ln2].split('').sort().join('');
                 if(sortedString == sortedString2){
                    console.log(sortedString2)
                 }
           }
        }
    }
});


//var server = app.listen(3000, function () {
  //  console.log("Server listening at port %s", server.address().port)
//});