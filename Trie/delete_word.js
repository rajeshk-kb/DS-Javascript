'use strict';


let Trie = require('./insert_and_search.js');

var newTrie = deleteKey(Trie.trie, 'answer');

// var util = require('util');
// console.log(util.inspect(newTrie, { showHidden: false, depth: null, colors: true }))

/* 
Step 1 : Reach to last the node of a key recursively 
Step 2 : Delete the last child 
Step 3 : Then delete child from bottom to top until parent have only one child.
*/

function deleteKey(root, key, depth = 0) {
    if (!root)
        return;

    // If last character of key is being processed 
    if (depth == key.length && depth > 0) {
        delete root.parent.children[root.key]; // delete current child of its parent
        return root;
    }

    // If not last character, recur for the child 
    deleteKey(root.children[key[depth]], key, depth + 1);

    // delete current child if this is the only one child of the parent
    if (Object.keys(root.children).length === 0) {
        delete root.parent.children[root.key];
    }

    return root;
}
