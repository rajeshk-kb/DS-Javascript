'use strict';

let BST = require('./create_binary_tree.js');

var ht = hightOfTree(BST.root);

console.log(ht)






function hightOfTree(root){
    if(!root) return -1;
    var leftHeight = hightOfTree(root.left);
    console.log(leftHeight, rightHeight, "--", Math.max(leftHeight, rightHeight) + 1)
    var rightHeight = hightOfTree(root.right);


console.log('--')
    console.log(leftHeight, rightHeight, "--", Math.max(leftHeight, rightHeight) + 1)
 
    return Math.max(leftHeight, rightHeight) + 1;
}
