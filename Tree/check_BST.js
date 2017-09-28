'use strict';

function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null;
}
var bst = new BinarySearchTree();
bst.root = new Node(8)
bst.root.left = new Node(9)
bst.root.right = new Node(10)
        
var isBST = checkBST(bst.root, -10000, 10000);
if(isBST){
    console.log("Tree is BST")
}else{
    console.log("Tree is not BST")
}


function checkBST(root, min, max){
    if(root  == null){
        return true;
    }
    if(root.value > max || root.value < min){
        return false;
    }
    return checkBST(root.left, min, root.value) && checkBST(root.right, root.value, max);
}