
function LikedList() {
    this.head = null;
}

LikedList.prototype.push = function (val) {
    let node = {
        data: val,
        next: null,
        random: null
    }

    if (!this.head) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

}


var map = new Map();
LikedList.prototype.clone = function () {

    var orig_curr = this.head;
    var clone_curr = null;
    while (orig_curr !== null) {
        let node = {
            data: orig_curr.data,
            next: orig_curr.next,
            random: orig_curr.random,
        }
        clone_curr = node;
        map.set(orig_curr, clone_curr); //  Set original node as key and cloned node as value
        orig_curr = orig_curr.next;
    }
    return map;
}

let ll = new LikedList();

ll.push(5);
ll.push(4);
ll.push(3);
ll.push(2);
ll.push(1);


// Setting up random references.
ll.head.random = ll.head.next.next;
ll.head.next.random = ll.head.next.next.next;
ll.head.next.next.random = ll.head.next.next.next.next;
ll.head.next.next.next.random = ll.head.next.next;
ll.head.next.next.next.next.random = ll.head.next;

// Making a clone of the original linked list.
var clone = ll.clone();


clone.forEach(function(value, key){
    console.log(value.data, value.random ? value.random.data:null, '--', key.data, key.random ? key.random.data:null);
});

// Output
//  Key -- Value
// 1 3 '--' 1 3
// 2 4 '--' 2 4
// 3 5 '--' 3 5
// 4 3 '--' 4 3
// 5 2 '--' 5 2


// Time Complexity:  O(n)
// Auxiliary Space:  O(n)



