
function LikedList() {
    this.head = null;
}


LikedList.prototype.push = function (val) {
    let node = {
        data: val,
        next: null,
        pre: null
    }

    if (!this.head) {
        this.head = node;
    } else {

        // Insert at beginning  of liked list 
   /*                  this.head.pre = node;
                    node.next = this.head;
                    this.head = node; */


        // Insert at end of the liked list
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        node.pre = current;
    }

}



let ll = new LikedList();

ll.push(10);
ll.push(12);
ll.push(19);
ll.push(34);

console.log(ll)

// Delete node from doubly linkedlist
var data = deleteNode(ll.head, 2, 4)
console.log('Resulted ----------')
console.log(data)


function deleteNode(root, n, sizeOfList){

    if(!root || n <= 0 || n>sizeOfList){
        return root;
    }
    if(n == 1){
        root = root.next;
        root.pre = null;
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
    currentNode.next.pre = previousNode
    return root;
}