
class Node {
    // constructor 
    constructor(value) {
        this.data = value;
        this.next = null
    }
}

// linkedlist class 
class LinkedList {
    constructor(value) {
        this.head = null;
        this.size = 0;
    }

    // add item to linkedlist
    add(value) {
        var node = new Node(value);

        // At beginning 
        node.next = this.head;
        this.head = node;

        // At ending
     /*    var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } */
        this.size++;
    }

    // prints the list items 
    printList() {
        console.log(this);
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + "->";
            curr = curr.next;
        }
        console.log(str);
    }

}

var ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

module.exports.node = ll;