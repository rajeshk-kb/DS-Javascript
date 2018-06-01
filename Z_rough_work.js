
// Print string of odd length in ‘X’ format
 // https://www.geeksforgeeks.org/print-string-of-odd-length-in-x-format/

var name = "geeksforgeeks";


var len = name.length;


var space1 = '';

for(var i= 0; i<len; i++){
    var space2 = ' ';
    var p1 = name.charAt(i);
    var p2 = name.charAt(len-i-1);
    
    if(p1 == p2 && i > len/2-1 && i < len/2){
        p2 = '';
    }else if(i<len/2){

        for(var k = 2; k<len/2-i; k++){
            space2 = space2+'  ';
        }
        
    }else{
        space1 = '';
        for(var m = len/2+1; m<i; m++){
            space2 = space2+'  ';
        }
        for(var k = 0; k<len-i-1; k++){
            space1 = space1+' ';
        }
    }
    console.log(space1+p1+space2+p2)
    space1 = space1+' ';
}   



// console.log('\x1b[31m%s\x1b[0m', "=================")
//console.log(util.inspect(ll, { showHidden: true, depth: null, colors: true }))