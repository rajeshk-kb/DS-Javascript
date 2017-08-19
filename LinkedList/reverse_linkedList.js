'use strict';

let list = require('./create_linkedList.js');

function printList(head) {
    var temp = [];
    var current = head;
    while (current) {
        temp.push(current.data);
        current = current.next;
    }
    return temp.join(' ');
}

console.log("Your List    : " + printList(list.node))



// ========================Iterative method =================================
// var current = list.node;
// var next = null;
// let pre = null;

// while (current) {
//     next = current.next;
//     current.next = pre;
//     pre = current;
//     current = next;

// }
// var head = pre;

// ======================== Recursive method =================================
var head = null;
function reverseList(p) {

    if (p.next == null) {
        head = p;
        return;
    }
    reverseList(p.next)
    var q = p.next;
    q.next = p;
    p.next = null;
}

reverseList(list.node)

console.log("Reversed List    : " + printList(head))



