
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