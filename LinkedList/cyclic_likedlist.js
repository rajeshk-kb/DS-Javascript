'use strict';

let list = require('./insert_at_nth.js'); 

console.log('Linkedlist is cyclic - '+checkCyclic(list.node))
function checkCyclic(head) {
    var slow_p = head;
    var fast_p = head;
       while (slow_p && fast_p && fast_p.next){
           slow_p = slow_p.next;
           fast_p  = fast_p.next.next;
           if (slow_p == fast_p){
               return 'YES';
            }
       }
       return 'NO';
}


// Detect loop and remove it
// http://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/



function newNode(key){
  this.data = key
  this.next = null;
}
var head = new newNode(50); 
head.next = new newNode(20); 
head.next.next = new newNode(15); 
head.next.next.next = new newNode(4); 
head.next.next.next.next = new newNode(10); 

/* Create a loop for testing */
head.next.next.next.next.next = head.next.next; 
  
var util = require('util');
console.log(util.inspect(head, { showHidden: true, depth: null, colors: true }))
    // printList(head); 
hashAndRemove(head); 
// console.log(head)


function hashAndRemove(head) { 
    // hash map to hash addresses of the linked list nodes 
    var node_map = new Set(); 
    var node = head;
     while (!node_map.has(node.next)) {
        node_map.add(node);
        node = node.next;
    }
    node.next = null;

} 




