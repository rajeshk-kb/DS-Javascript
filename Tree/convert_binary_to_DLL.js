'use strict';

let BST = require('./create_binary_tree.js');

var head = null;
var tail = null;
var prev = null;

var ht = binaryToDLL(BST.root, head, prev, tail);

// console.log(BST)





var head = BST.root;
function binaryToDLL(root, head, prev, tail){
    if(root == null){
        return root;
    }
    binaryToDLL(root.left, head, prev, tail);
    if (head === null) {
        head = root;
      //console.log(head)
    }
    if (prev === null) {
        prev = root;
      //console.log(prev)
    } else {
        //console.log(root);
      //console.log(prev);
      root.left = prev;
      prev.right = root;
    }
    prev = root
    binaryToDLL(root.right, head, prev, tail);
    if(root.right === null) {
        tail = root;
    }
    return head;
}

console.log(ht)
