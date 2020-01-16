
(function () {
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
    stack.push(arr[0]);

    for (var i = 1; i < n; i++) {
        var top_element = stack[stack.length - 1];
        var next = arr[i];
        while (stack.length != 0 && next > top_element) {
            console.log(top_element + " -- " + next);
            stack.pop();

            if(stack.length != 0){
                top_element = stack[stack.length - 1]
            }
        }
        stack.push(arr[i]);
    }

    while (stack.length != 0) {
        top_element = stack[stack.length - 1];;
        console.log(top_element + " -- " + -1);
        stack.pop();
    }
})(); 











