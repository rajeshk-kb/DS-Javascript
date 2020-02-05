
let Trie = require('./insert_and_search.js');


console.log(wordBreak("theirbyeany", Trie.trie) ? "Yes" : "No")


function wordBreak(str, root) {
    let size = str.length;

    if (size == 0)
        return true;

    for (let i = 1; i <= size; i++) {
        if (search(root, str.substring(0, i)) && wordBreak(str.substring(i, size), root)) { // recursion
            return true;
        }
    }
    return false;
}


function search(root, word) {
    var node = root;
    for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
            node = node.children[word[i]];
        } else {
            return false;
        }
        if (i == word.length - 1 && node.end == false) {
            return false;
        }
    }
    return true;
}


// Recursion executing process for input 'theirbyeany';

/*                             Search() && WordBreak()
                              (T)'any'          (T) // size = 0 so returns true(T)
                               |
                               |
                               V
              Search() && WordBreak()
               (T)'bye'         (T)
               |
               |
               V
 Search() && WordBreak()
  (T)'their'     (T)
*/



//Dynamic Programming -- Word Break Problem

var dictionary = ["mobile",
 "samsung", "sam", "sung", "man", 
 "mango", "icecream", "and", "go", "i", 
 "like", "ice", "cream"];

var output = wordBreakDP("ilikesamsung", dictionary) ? "Yes" : "No";
console.log(output)

var i = 0;
function wordBreakDP(str, dict) {
    let size = str.length;

    if (size == 0)
        return true;

    for (let i = 1; i <= size; i++) {
      We first check whether 
        // First check whether current prefix is in dictionary. Then recursively check for remaining 
        // string str.substr(i, size) which is suffix of length size
        if(dictionaryContains(dict, str.substring(0, i)) && wordBreakDP(str.substring(i, size), dict)){ // recursion
            return true;
        }
    }
    return false;
}


function dictionaryContains(dict, word) {
    var size = dict.length;
    for (var i = 0; i < size; i++)
        if (dict[i] === word)
            return true;
    return false;
}





