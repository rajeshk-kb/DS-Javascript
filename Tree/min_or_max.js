'use strict';

let BST = require('./create_binary_tree.js');


var min = findMinValue(BST.root);
var max = finMaxValue(BST.root);

console.log(min, max);

function findMinValue(node){
    var current = node;
    /* loop down to find the leftmost leaf */
    while (current.left != null){
        current = current.left;
    }
    return current.value;
}

function finMaxValue(node){
    var current = node;
    /* loop down to find the rightmost leaf */
    while (current.right != null){
        current = current.right;
    }
    return current.value;
}