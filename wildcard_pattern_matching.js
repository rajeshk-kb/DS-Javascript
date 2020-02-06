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

}
let str = 'baaabab'.split(''); // convert string to char array
let pattern = "*****b***ab***".split('');
// let pattern = "b??aba**".split('');



var wcp = new WildCardPattern();

var output = wcp.strMatch(str, pattern, str.length, pattern.length) ? 'Yes' : 'No'
console.log(output);
