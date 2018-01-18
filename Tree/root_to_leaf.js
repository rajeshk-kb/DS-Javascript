'use strict';

// https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/
// Root to leaf path sum equal to a given number

let BST = require('./create_binary_tree.js');


var util = require('util');
//console.log(util.inspect(BST, { showHidden: true, depth: null, colors: true }))

var sum = 0;
var findPath = false;
function hasPathSum(root, num) {
    
    if (root == null) {
        return null
    } else {
        sum = sum + root.value;
        var left = hasPathSum(root.left, num)
        var right = hasPathSum(root.right, num)
        if (sum == num && left == null && right == null) {
            findPath = true;
        } else {
            sum = sum - root.value;
        }
       
    }
    if (findPath) {
        return num
    } else {
        return 0;
    }

}




if (hasPathSum(BST.root, 97))
    console.log('Yes');
else
    console.log('No');


// Time Complexity: O(n)