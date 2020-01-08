'use strict';

let BST = require('./create_binary_tree.js');

var head = null;
var prev = null

binaryToDLL(BST.root);
console.log(BST.root)
  
function binaryToDLL(root){
  if(root == null){
      return;
  }
  binaryToDLL(root.left);
  if (prev === null) {
      prev = root;
  } else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;
  binaryToDLL(root.right);
}

