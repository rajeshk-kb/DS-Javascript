
var str = '{()}[]';
var arr = [];
console.log('Are parenthesis - ', areParenthesis(str));


function areParenthesis(str) {

    for (var i = 0; i < str.length; i++) {
        var chr = str.charAt(i);
        if (chr == '{' || chr == '(' || chr == '[') {
            arr.push(chr);
        } else if (chr == '}' || chr == ')' || chr == ']') {
            if (arr.length == 0) {
                return false;
            } else {
                var top = arr[arr.length - 1];
                if ((top == '{' && chr == '}') || (top == '(' && chr == ')') || (top == '[' && chr == ']')) {
                    arr.pop();
                } else {
                    return false;
                }
            }
        }
    }
    if (arr.length == 0) {
        return true;
    } else {
        return false;
    }
}