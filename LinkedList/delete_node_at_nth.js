'use strict';

let list = require('./create_linkedList.js');



var current = list.node;




function deleteNode(root, n, sizeOfList){
    //var current = root;

    if(!root || n <= 0 || n>sizeOfList){
        return root;
    }
    if(n == 1){
        root = root.next;
        return root;
    }

    var previousNode = root;
    var currentNode = root.next;
    while (n>2) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        n--;
    }
    previousNode.next = currentNode.next;

    return root;
}


console.log("Before    : " + printList(list.node))
var root = deleteNode(list.node, -1, 7);
console.log("After     : " + printList(root))

function printList(head) {
    var temp = [];
    var current = head;
    while (current) {
        temp.push(current.data);
        current = current.next;
    }
    return temp.join(' ');
}





