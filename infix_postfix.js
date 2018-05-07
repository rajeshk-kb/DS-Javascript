var str = "(a+b-c)*(d-e)/(f-g+h)"

//'A+B*C-D*E'--> output --> ABC*+CD*-;
//"a+b*(c^d-e)^(f+g*h)-i" -->output -->abcd^e-fgh*+^*+i-
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


var str = 'abc-+de-fg-h+/*';
// output -- (a+b-c)*((d-e)/(f-g+h))
postfix_to_infix(str);


function postfix_to_infix(exp) {

    var stack = [];
    for (var i = 0; i < exp.length; i++) {
        var cc = exp.charCodeAt(i);
        if ((cc >= 65 && cc <= 90) || (cc >= 97 && cc <= 122)) { // lies between asci values or character codes
            stack.push(exp.charAt(i));
        } else {
            var pop1 = stack.pop();
            var pop2 = stack.pop();
            if (exp.charAt(i) == '*' || exp.charAt(i) == '/') {
                pop1 = '(' + pop1 + ')';
                pop2 = '(' + pop2 + ')';
            }

            var new_element = pop2 + '' + exp.charAt(i) + '' + pop1;
            // console.log(pop2, pop2, new_element)


            stack.push(new_element);
        }
    }
    console.log(stack.join(' ')) 
}