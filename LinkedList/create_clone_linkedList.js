
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


// Copy Linked List with Arbitrary Pointer
// https://www.educative.io/m/copy-linked-list-with-arbitrary-pointer
let deep_copy_arbitrary_pointer = function(head) {
    if (!head) {
        return null;
    }

    let current = head;
    let new_head = null;
    let new_prev = null;
    let ht = new Map();

    // create copy of the linked list, recording the corresponding
    // nodes in hashmap without updating arbitrary pointer
    while (current) {
        let new_node = new LinkedListNode(current.data);

        // copy the old arbitrary pointer in the new node
        new_node.arbitrary = current.arbitrary;

        if (new_prev) {
            new_prev.next = new_node;
        } else {
            new_head = new_node;
        }

        ht.set(current, new_node);
        new_prev = new_node;
        current = current.next;
    }

    let new_current = new_head;
    // updating arbitrary pointer
    while (new_current) {
        if (new_current.arbitrary) {
            let node = ht.get(new_current.arbitrary);
            new_current.arbitrary = node;
        }

        new_current = new_current.next;
    }

    return new_head;
};

let create_linked_list_with_arb_pointers = function(length) {
    let head = create_random_linked_list(length);
    let v = [];
    let temp = head;
    while (temp) {
        v.push(temp);
        temp = temp.next;
    }

    for (let i = 0; i < v.length; i++) {
        let j = Math.floor(Math.random() * (v.length - 1));
        let p = Math.floor(Math.random() * 100);
        if (p < 75) {
            v[i].arbitrary = v[j];
        }
    }
    return head;
};

let print_with_arb_pointers = function(head) {
    let printed_result = '';
    while (head) {
        let temp = '';
        if (head.arbitrary) {
            temp += head.arbitrary.data;
        }
        printed_result += " (" + temp + "), ";
        head = head.next;
    }
    console.log(printed_result);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Deep Copy Arbitrary Pointers");
console.log("---------------------------------------");

let head = create_linked_list_with_arb_pointers(12);
print_with_arb_pointers(head);

let head2 = deep_copy_arbitrary_pointer(head);
print_with_arb_pointers(head2);
