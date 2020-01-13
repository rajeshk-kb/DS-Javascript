var str = "a+b*(c^d-e)^(f+g*h)-i";

infix_to_postfix(str);

  function infix_to_postfix(exp) {
    var stack = [];
    var res = '';

    for (var i = 0; i < exp.length; i++) {

      var cc = exp.charCodeAt(i);
      if ((cc >= 65 && cc <= 90) || (cc >= 97 && cc <= 122)) { // lies between asci values or character codes
        res = res + exp.charAt(i);
        // If the scanned character is an '(', push it to the stack. 
      } else if (exp.charAt(i) == '(') {
        stack.push(exp.charAt(i));

        //  If the scanned character is an ')', pop and output from the stack  
        // until an '(' is encountered. 
      } else if (exp.charAt(i) == ')') {
        // If current character has the higher precedence .
        while (stack.length != 0 && stack[stack.length - 1] != '(') {
          res = res + stack.pop();;
        }
        //console.log(stack)
        if (stack.length != 0 && stack[stack.length - 1] != '(') {
          console.log("Invalid Expression");  // invalid expression  
          return;
        } else {
          stack.pop();
        }
      } else { // an operator is encountered 

        // If current character has the lesser or equal precedence .
        while (stack.length != 0 && Prec(exp.charAt(i)) <= Prec(stack[stack.length - 1])) {
          res = res + stack.pop();
        }
        stack.push(exp.charAt(i));
      }
    }
    while (stack.length != 0) {
      if (stack.peek() == '(')
        return "Invalid Expression";
      result += stack.pop();
    }
    console.log(res) // abcd^e-fgh*+^*+i-
  }


  function Prec(ch) {
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
