//https://www.geeksforgeeks.org/difference-between-sums-of-odd-and-even-levels/


// https://www.geeksforgeeks.org/tree-isomorphism-problem/
'use strict';


let BST = require('./create_binary_tree.js');


var util = require('util');
//console.log(util.inspect(BST, { showHidden: true, depth: null, colors: true }))

  

var diff = getLevelDiff(BST.root);

console.log(diff)

function getLevelDiff(root){
    if (root == null)
         return 0;
 
   // Difference for root is root's data - difference for
   // left subtree - difference for right subtree
   var value = root.value;
   var leftv =  getLevelDiff(root.left);
   var rightv =  getLevelDiff(root.right);
   console.log(value, leftv, rightv)
   return value - (leftv + rightv)
}