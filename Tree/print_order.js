'use strict';

let BST = require('./create_binary_tree.js');


//print_inorder(BST.root);
print_preorder(BST.root);
//print_postorder(BST.root);




// Print by inorder
// or print in sorting order
// or left --> right
function print_inorder(root){ 
    if(!root){
        return;
    }
    print_inorder(root.left)
    console.log(root.value)
    print_inorder(root.right)
}

console.log("=========================")

// Print by preorder
// or print in sorting order
// or left --> right
function print_preorder(root){ 
    if(!root){
        return;
    }
    
    console.log(root.value)
    print_preorder(root.left)
    print_preorder(root.right)
}


console.log("=========================")

// Print by inorder
// or print in sorting order
// or left --> right
function print_postorder(root){ 
    if(!root){
        return;
    }
    
    print_postorder(root.left)
    print_postorder(root.right)
    console.log(root.value)
}

