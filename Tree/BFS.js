'use strict';

let BST = require('./create_binary_tree.js');

bfs(BST.root);

function bfs(root){
    var Queue = new Array();
    Queue.unshift(root);
    while(Queue.length != 0){
        if(Queue[Queue.length-1].left){
            Queue.unshift(Queue[Queue.length-1].left);
        }
        if(Queue[Queue.length-1].right){
            Queue.unshift(Queue[Queue.length-1].right);
        }
        console.log(Queue.pop().value);
   }
}
