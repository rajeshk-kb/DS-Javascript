/////       AMAZON
// Print all nodes at distance k from a given node
// http://www.geeksforgeeks.org/print-nodes-distance-k-given-node-binary-tree/


'use strict';

let BST = require('./Tree/create_binary_tree.js');


printkdistanceNode(BST.root, BST.root.left, 2);


function printkdistanceNode(root, target, k) {
    if (root == null) {
        return -1;
    }
    if (root == target) {
        printkdistanceNodeDown(root, k)
        return 0;
    }
    // Check if target node was found in left subtree
    var dl = printkdistanceNode(root.left, target, k);
    if (dl != -1) {
        if (dl + 1 == k) {
            console.log(root.value)
        } else {
            printkdistanceNodeDown(root.right, k - dl - 2);

        }
        return 1 + dl;
    }

    // Check if target node was found in right subtree
    var dr = printkdistanceNode(root.right, target, k);
    if (dr != -1) {
        if (dr + 1 == k) {
            console.log(root.value)
        } else {
            printkdistanceNodeDown(root.left, k - dr - 2);

        }
        return 1 + dr;
    }

    return -1;

}



function printkdistanceNodeDown(root, k) {

    if (root == null || k < 0) {
        return;
    }
    if (k == 0) {
        console.log(root.value)
        return;
    } else {
        printkdistanceNodeDown(root.left, k - 1);
        printkdistanceNodeDown(root.right, k - 1);
    }
}

