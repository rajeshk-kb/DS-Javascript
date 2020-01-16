
// Find maximum level sum in Binary Tree


'use strict';

let BST = require('./create_binary_tree.js');

maxLevelSum(BST.root);

function maxLevelSum(root){
    var Queue = new Array();
    var result = 0;
    Queue.unshift(root);
    while(Queue.length != 0){
        var count = Queue.length; 
        var sum = 0;
        while (count--) {
            var front =  Queue.pop();
            sum  += front.value;
            if(front.left){
                Queue.unshift(front.left);
            }
            if(front.right){
                Queue.unshift(front.right);
            }
        }
        result = Math.max(result, sum)
    }
    console.log(result)// Output
}



// Ref . https://www.geeksforgeeks.org/find-level-maximum-sum-binary-tree/



