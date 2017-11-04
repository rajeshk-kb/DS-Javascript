
(function() {
    console.log("___________________  Output  ____________________")
    var arr = [13, 7, 6, 12, 11, 16]
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
    stack.push(arr[0]);
    for(var i = 1; i<n; i++){
        var top = stack[stack.length-1];
        var next = arr[i];
        if(top>next){
            stack.push(next);
        }else{
            
            var ln = stack.length;
            while(ln>0){
                if(top<next){
                    console.log(stack[stack.length-1]+" --> "+next);
                    stack.pop()
                    top = stack[stack.length-1];
                    ln = stack.length
                }else{
                   //  stack.push(next);
                    // ln = stack.length
                  //  if(i == n-1 && ln>0){
                    //    console.log(stack[stack.length-1]+" --> "+-1);
                    //    stack.pop()
                   //     ln = stack.length;
                  //  }else{
                        ln = 0;
                  //  }
                }
            }
        }
        
    }
})(); 