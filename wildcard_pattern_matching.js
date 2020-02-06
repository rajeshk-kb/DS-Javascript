'use strict';
// Dynamic Programming | Wildcard Pattern Matching | Linear Time and Constant Space

class WildCardPattern {

    strMatch(txt, pat, n, m) {
        // Base case
        if (m == 0)
            return true;
        // step 1
        // initialize markers :
        let i = 0;
        let j = 0;
        let index_txt = -1;
        let index_pat = -1;
        while (i < n) {

            // for step - (2, 5)
            if (j < m && txt[i] == pat[j]) {
                i++;
                j++;
            }

            // for step - (3)
            else if (j < m && pat[j] == '?') {
                i++;
                j++;
            }

            // for step - (4)
            else if (j < m && pat[j] == '*') {
                index_txt = i;
                index_pat = j;
                j++;
            }

            // for step - (5)
            else if (index_pat !== -1) {
                i = index_txt + 1;
                j = index_pat + 1;
                index_txt++;
            }

            // for step - (6)
            else{
               return false;
            }
        }

        // for step - (7)
        while (j < m && pat[j] == '*') {
            j++;
        }

        // Final check
        if(j == m){
            return true;
        }

        return false
    }

   // https://www.geeksforgeeks.org/wildcard-character-matching/
    strMatchRec(first, second){

        // Base case
        if(first.length == 0 && second.length == 0)
            return true;

        if(first.length>1 && first.charAt(0) == '*' && second.length == 0)
            return false;

        if((first.length>1 && first.charAt(0) == '?') ||
            first.length !== 0 && second.length !== 0 &&
            first.charAt(0) === second.charAt(0))
            return this.strMatchRec(first.substring(1), second.substring(1))

        if(first.length>1 && first.charAt(0) == '*')
            return this.strMatchRec(first.substring(1), second) || this.strMatchRec(first, second.substring(1));
        return false;
    }

}
let str = 'abcd'
let pattern = "*c*d"



var wcp = new WildCardPattern();

var output = wcp.strMatch(str.split(''), pattern.split(''), str.length, pattern.length) ? 'Yes' : 'No'
var output2 = wcp.strMatchRec(pattern, str) ? 'Yes' : 'No'
console.log(output);
console.log(output2);






