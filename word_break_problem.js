//Dynamic Programming -- Word Break Problem

var dictionary = ["mobile", "samsung", "sam", "sung", "man", "mango", "icecream", "and", "go", "i", "like", "ice", "cream"];

// Input:  ilikesamsung
// Output: Yes
// The string can be segmented as "i like samsung" 
// or "i like sam sung".
var output = wordBreak("ilikesamsung") ? "Yes" : "No";
console.log(output)

function wordBreak(str) {
    var ln = str.length;
    if (ln == 0) return true;

    for (let i = 1; i <= ln; i++) {

        var dc = dictionaryContains(str.substr(0, i))
        var wb = wordBreak(str.substr(i, ln - i));
        console.log(ln)
        if (dc && wb) return true
    }
    return false
}


function dictionaryContains(word) {
    var size = dictionary.length;
    for (var i = 0; i < size; i++)
        if (dictionary[i] === word)
            return true;
    return false;
}