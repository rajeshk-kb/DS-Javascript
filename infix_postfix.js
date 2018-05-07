var str = "a+b*(c^d-e)^(f+g*h)-i";

infix_to_postfix(str);

function infix_to_postfix(exp) {
    var stack = [];
    var res = '';

    for (var i = 0; i < exp.length; i++) {

        var cc = exp.charCodeAt(i);
        if ((cc >= 65 && cc <= 90) || (cc >= 97 && cc <= 122)) { // lies between asci values or character codes
            res = res + exp.charAt(i);
        } else if (exp.charAt(i) == '(') {
            stack.push(exp.charAt(i));
        } else if (exp.charAt(i) == ')') {
            // If current character has the higher precendence .
            while (stack.length != 0 && stack[stack.length - 1] != '(') {
                //console.log(stack)
                res = res + stack.pop();;
            }
            //console.log(stack)
            if (stack.length != 0 && stack[stack.length - 1] != '(') {
                console.log("invalid");
            } else {
                stack.pop();
            }
        } else {

            // If current character has the higher precendence .
            while (stack.length != 0 && hasHigherPrec(exp.charAt(i)) <= hasHigherPrec(stack[stack.length - 1])) {
                res = res + stack[stack.length - 1];
                stack.pop();
            }
            stack.push(exp.charAt(i));
        }
    }
    while (stack.length != 0) {
        res = res + stack.pop();
    }
    console.log(res)
}


function hasHigherPrec(ch) {
    switch (ch) {
        case '+':
        case '-':
            return 1;

        case '*':
        case '/':
            return 2;

        case '^':
            return 3;
    }
    return -1;
}