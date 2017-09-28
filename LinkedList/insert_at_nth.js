
function LikedList() {
    this.head = null;
}



function insert(head, index, val) {
    
    if (index === 0) {
        if(val == 35){
            console.log("1111")
            console.log(head)
        }
        let node = {
            data: val,
            next: null
        }
        node.next = head
        head = node;
        return head
    }
    
    if(val == 35){
        console.log("000")
    }
    head.next = insert(head.next, index - 1, val)
    return head
}

LikedList.prototype.push = function (index, val) {
    this.head = insert(this.head, index, val)
}



let ll = new LikedList();

ll.push(0, 10);

ll.push(1, 12);
ll.push(2, 19);
ll.push(1, 22);
ll.push(2, 15);
ll.push(3, 11);
ll.push(5, 35);


console.log(ll.head.data)
console.log(ll.head.next.data)
console.log(ll.head.next.next.data)
console.log(ll.head.next.next.next.data)
console.log(ll.head.next.next.next.next.data)
console.log(ll.head.next.next.next.next.next.data)
console.log(ll.head.next.next.next.next.next.next.data);