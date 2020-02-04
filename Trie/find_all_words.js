'use strict';


let Trie = require('./insert_and_search.js');

printWords(Trie.trie, '');

function printWords(root, text){

    for (let key in root.children) {
        var rChild = root.children[key];// root child
      if(rChild.end == true){
        console.log(text+rChild.key);
        return;
      }else{
        printWords(rChild, text+rChild.key)
      }
    }
                    
}


// Method 2
// 1. Go to end until its becomes true recursively
// 2. By using end key then go to parent node and store word in a array
// 3. Similer for all end node


/*var util = require('util');
let Trie = require('./create_trie.js');
const arr = [];
findAllWords(Trie.trie, arr);

function findAllWords(node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) {
        arr.push(getWord(node));
    }
    // iterate through each children, call recursive findAllWords
    for (var child in node.children) {
        findAllWords(node.children[child], arr);
    }
}


function getWord(node) {
    var output = [];
    var node = node;

    while (node !== null) {
        output.unshift(node.key);//insert at index 0
        node = node.parent;
    }
    return output.join('');
}
// final output
console.log(arr)*/