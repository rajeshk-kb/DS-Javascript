
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

        // Insert at beginning  of liked list 
        node.next = this.head;
        this.head = node;


        // Insert at end of the liked list
        /* current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node; */
    }

}



let ll = new LikedList();

ll.push(10);
ll.push(12);
ll.push(19);
ll.push(22);
ll.push(15);
ll.push(11);
ll.push(35);

/* console.log(ll.head.data)
console.log(ll.head.next.data)
console.log(ll.head.next.next.data)
console.log(ll.head.next.next.next.data)
console.log(ll.head.next.next.next.next.data)
console.log(ll.head.next.next.next.next.next.data)
console.log(ll.head.next.next.next.next.next.next.data) */


module.exports.node = ll.head;



