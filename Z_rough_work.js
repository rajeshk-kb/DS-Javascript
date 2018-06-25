


var arr1 = [1, 4, 2, 3, 10, 2]
var arr2 = [4, 2, 6, 5, 2, 9];

var max = -Infinity;
var min = Infinity;
for(var i = 0; i<arr1.length; i++){
    if(arr1[i]>max){
        max = arr1[i];
    }
}

for(var i = 0; i<arr2.length; i++){
    if(arr2[i]<min){
        min = arr2[i];
    }
}


console.log(max*min)

// console.log('\x1b[31m%s\x1b[0m', "=================")
//console.log(util.inspect(abhijit, { showHidden: true, depth: null, colors: true }))