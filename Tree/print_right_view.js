'use strict';
// https://www.geeksforgeeks.org/print-right-view-binary-tree-2/
let BST = require('./create_binary_tree.js');


var util = require('util');

rightViewUtil(BST.root, 1, 0);

var max_level = 0;// intialize max level 
function rightViewUtil(root, level, mx) {
    if (root == null) {
        return;
    }

    // If this is the last Node of its level
    if (level>mx) {
        console.log(root.value)
        max_level = level;
    }

    // Recur for right subtree first, then left subtree
    rightViewUtil(root.right, level + 1, max_level);
    rightViewUtil(root.left, level + 1, max_level);
}

