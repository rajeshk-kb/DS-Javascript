// Remove duplicates from sorted linkedlist

var util = require('util');


function LikedList() {
    this.head = null;
}


LikedList.prototype.push = function (val) {
    let node = {
        data: val,
        next: null
    }

    if (!this.head) {
        this.head = node;
    } else {

        // Insert at end of the liked list
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

}



let ll = new LikedList();

ll.push(4);
ll.push(4);
ll.push(6);
ll.push(6);
ll.push(6);
ll.push(7);
ll.push(7);
ll.push(9);



var result = removeDuplicates(ll.head);
console.log(result);

function removeDuplicates(head) {
    var p = head;
    while (p != null && p.next) {
        if (p.data == p.next.data) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
}