
// A Program to check if strings are rotations of each other or not

(function () {


    var size = 5;
    var arr = [];
    var k = 1;
    // Create a empty two dimensional array.
    for(var i = 0; i<size; i++){
        var ar = [];
        for(var j = 0; j<size; j++){
            ar.push(0);
        }
        arr.push(ar);
    }
    var i = 0;
    var j = parseInt(size/2);

    if(size%2 == 0){
        console.log("Magic square not possible for even numbers.")
        return;
    }

    while(k<=size*size){
            if(k<10){
                arr[i][j] = '0'+k;
            }else{
                arr[i][j] = ''+k;
            }

            i--;
            j++;
            if(k%size == 0){
                i= i+2;;
                j--;
            }else{
                if(i<0){
                    i = size-1;
                }else if(j==size){
                    j = 0;
                }
            }
            k++;
    }
    console.log(arr)
})();