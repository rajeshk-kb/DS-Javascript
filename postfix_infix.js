var str = 'abcd^e-fgh*+^*+i-';///'ab*c+';
postfix_to_infix(str);


function postfix_to_infix(exp) {
   console.log(exp)
    var stack = [];
    for (var i = 0; i < exp.length; i++) {
        var cc = exp.charCodeAt(i);
        if ((cc >= 97 && cc <= 122) || (cc >= 65 && cc <= 90)) { // lies between asci values or character codes
            stack.push(exp.charAt(i));
        } else {
            var pop1 = stack.pop();
            var pop2 = stack.pop();
        
           // var new_element = '('+pop2 + '' + exp.charAt(i) + '' + pop1+')';
            //if(exp.charAt(i) == '*' || exp.charAt(i) == '/' ||  pop2.length>2 || pop2.length>2 ||i == exp.length-1){
                var new_element = '('+pop2 + '' + exp.charAt(i) + '' + pop1+')';

               // console.log('-------------------    ', new_element)
          //  }else{
            //    var new_element = pop2 + '' + exp.charAt(i) + '' + pop1;
          //  }

            stack.push(new_element);
        }
    }

    console.log('postfix to infix ---')
    console.log('input ', exp)
    console.log('output ', stack.join(' '))

   // console.log(stack.join(' ')) 
}