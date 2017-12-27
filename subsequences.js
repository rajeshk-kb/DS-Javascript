// http://www.geeksforgeeks.org/generating-distinct-subsequences-of-a-given-string-in-lexicographic-order/
// http://www.geeksforgeeks.org/print-subsequences-string/


// Generating distinct subsequences of a given string in lexicographic order



function generate(st, str) {
    if (str.length == 0)
        return;
    // If current string is not already present.
    //console.log(s);
    if (!st.has(str)) {
        st.add(str);

        // Traverse current string, one by one 
        // remove every character and recur.
        //var t = null;
        for (var i = 0; i < str.length; i++) {
            var tmp = str;
            // drop character from the string
            // drop ith character from string
            tmp = str.slice(0, i) + str.slice(i+1);
           generate(st, tmp);
        }
    }
    return;
}
var str = "aabc";
var mySet = new Set();

generate(mySet, str)
let array = Array.from(mySet);
console.log("("+str+") ---> "+array.join(' '))