'use strict';

let BST = require('./create_binary_tree.js');

bfs(BST.root);

function bfs(root) {
    var Queue = new Array();
    Queue.unshift(root);
    while (Queue.length != 0) {
        var front = Queue.pop();
        console.log(front.value); // output
        if (front.left) {
            Queue.unshift(front.left);
        }
        if (front.right) {
            Queue.unshift(front.right);
        }
    }
}
