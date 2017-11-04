'use strict';

let BST = require('./create_binary_tree.js');

var lca = LCA(BST.root, 22, 32);

console.log(lca.value)






function LCA(root, n1, n2){
    if(root == null){
        return null;
    }
    if(root.value == n1 || root.value == n2){
        return root;
    }
    // Look for keys in left and right subtrees
    var left_lca  = LCA(root.left, n1, n2);
    var right_lca = LCA(root.right, n1, n2);
 
    // If both of the above calls return Non-NULL, then one key
    // is present in once subtree and other is present in other,
    // So this node is the LCA
    if (left_lca && right_lca)  return root;
 
    // Otherwise check if left subtree or right subtree is LCA
    return (left_lca != null)? left_lca: right_lca;
}
