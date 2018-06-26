'use strict';

let Trie = require('./create_trie.js');

var util = require('util');

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
console.log(arr)