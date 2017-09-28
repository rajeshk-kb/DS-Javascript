'use strict';

let list = require('./insert_at_nth.js'); 

console.log('Likedlist is cyclic - '+checkCyclic(list.node))
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





