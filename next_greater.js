
(function() {
    console.log("___________________  Output  ____________________")
    var arr = [13, 7, 6, 12]
    var n = arr.length;

// Method 1;
/*  var n = arr.length;   
    for(var i = 0; i<n; i++){
        for(var j = i+1; j<n; j++){
            if(arr[j]>arr[i]){
                console.log(arr[i]+" --> "+arr[j]);
                break;
            }else{
                if(j == n-1){
                    console.log(arr[i]+" --> "+-1);
                }
            }
        }
        if(i == n-1){
            console.log(arr[i]+" --> "+-1);
        }
    } 
*/


     // Method 2
    var stack = [];
    for(var i = 0; i<n; i++){
        
        
        if(arr[i]>stack[stack.length-1]){
            console.log(stack.pop()+" --> "+arr[i]);
        }else{
            stack.push(arr[i])
        }
    }

})(); 