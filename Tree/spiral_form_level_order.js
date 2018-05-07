'use strict';

let BST = require('./create_binary_tree.js');

var head = null;
var tail = null;
var prev = null;
var arr = [];
var ht = printSpiral(BST.root);


function printSpiral(root) {
   
    //console.log(root)
    var h = 3//height(root);
    //console.log(h)
    var i;
    var ltr = false;

    for (var i = 1; i <= h; i++) {
        print_given_level(root, i, ltr);
        ltr = !ltr;
        
    }
   
    console.log(arr.join(' '));
}


/* Print nodes at a given level */
function print_given_level(root, level, ltr) {
    if (root == null)
        return;

    if (level == 1) {
        arr.push(root.value)
    }
    else if (level > 1) {
        if (ltr) {
            print_given_level(root.left, level - 1, ltr);
            print_given_level(root.right, level - 1, ltr);
        }
        else {
            print_given_level(root.right, level - 1, ltr);
            print_given_level(root.left, level - 1, ltr);
        }
    }
}
