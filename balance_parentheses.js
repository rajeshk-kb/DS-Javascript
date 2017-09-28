'use strict';


var exp = "[()]{}{[()()]()}"

if(checkParantheses(exp)){
    console.log("Balanced")
}else{
    console.log("Not Balanced")
}



function checkParantheses(str){
    var ln = str.length;
    var stack = [];
    for(var i = 0; i<ln; i++){
        if(str.charAt(i) == '[' || str.charAt(i) == '{' || str.charAt(i) == '('){
            stack.push(str.charAt(i));
        }else if(stack.length != 0 && (str.charAt(i) == ']' && stack[stack.length-1] == '[')){
            stack.pop();
        }else if(stack.length != 0 && (str.charAt(i) == '}' && stack[stack.length-1] == '{')){
            stack.pop();
        }else if(stack.length != 0 && (str.charAt(i) == ')' && stack[stack.length-1] == '(')){
            stack.pop();
        }else{
            return false;
        }
    }
   
    if(stack.length == 0){
        return true;
    }else{
        return false;
    }
}

// Time complaxity ---- O(n)