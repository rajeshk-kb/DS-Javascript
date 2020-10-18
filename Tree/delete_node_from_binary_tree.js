'use strict';

let BST = require('./create_binary_tree.js');


var roots = deleteNode(BST.root, 70);
console.log('----')
console.log(roots)


function deleteNode(root, value){
    
    if (root == null) return root;
 
    // If the key to be deleted is smaller than the root's key,
    // then it lies in left subtree
    if (value < root.value){
        root.left = deleteNode(root.left, value);
    
 
    // If the key to be deleted is greater than the root's key,
    // then it lies in right subtree
    }else if (value > root.value){
        root.right = deleteNode(root.right, value);
 
    // if key is same as root's key, then This is the node
    // to be deleted
    }else{
       // node with only one child or no child
       if (root.left == null){
           var temp = root.right;
           root = null;
           return temp;
       }else if (root.right == null){
          var temp = root.left;
          root = null;
          return temp;
       }

       // node with two children: Get the inorder successor (smallest
       // in the right subtree)
       var temp = minValueNode(root.right);

       // Copy the inorder successor's content to this node
        root.value = temp.value;

       // Delete the inorder successor
        root.right = deleteNode(root.right, temp.value);
    }
    return root;
}



function minValueNode(node){
    var current = node;
    /* loop down to find the leftmost leaf */
    while (current.left != null){
        current = current.left;
    }
    return current;
}
