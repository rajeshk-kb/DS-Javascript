'use strict';

function newNode(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.random = null;
}


var tree = new newNode(1);
tree.left = new newNode(2);
tree.right = new newNode(3);
tree.left.left = new newNode(4);
tree.left.right = new newNode(5);
tree.random = tree.left.right;
tree.left.left.random = tree;
tree.left.right.random = tree.right;

cloneTree(tree)

//Algotitham
/* 
   cloneNode->key  = treeNode->key
   cloneNode->left = treeNode->left
   cloneNode->right = treeNode->right
   map[treeNode] = cloneNode 

   Recursively traverse both trees and set random pointers using entries from hash table
   cloneNode->random = map[treeNode->random] 

*/


// This function creates clone by copying key and left and right pointers
// This function also stores mapping from given tree node to clone.
function copyLeftRightNode(treeNode, mymap) {
    if (treeNode == null)
        return null;
    var cloneNode = new newNode(treeNode.value);
    mymap.set(treeNode, cloneNode);
    console.log(mymap)
    console.log('--------------')
    cloneNode.left = copyLeftRightNode(treeNode.left, mymap);
    cloneNode.right = copyLeftRightNode(treeNode.right, mymap);
    return cloneNode;
}

// // This function copies random node by using the hashmap built by
function copyRandom(treeNode, cloneNode, mymap) {
    if (cloneNode == null)
        return;
    cloneNode.random = mymap.get(treeNode.random);
    copyRandom(treeNode.left, cloneNode.left, mymap);
    copyRandom(treeNode.right, cloneNode.right, mymap);
}

// This function makes the clone of given tree. It mainly uses
function cloneTree(tree) {
    if (tree == null)
        return null;
    var mymap = new Map();
    var newTree = copyLeftRightNode(tree, mymap);
    // copyRandom(tree, newTree, mymap);
    // console.log(mymap)
    return newTree;
}
