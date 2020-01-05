
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
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

}



let list1 = new LikedList();

list1.push(5);
list1.push(10);
list1.push(15);

let list2 = new LikedList();

list2.push(2);
list2.push(3);
list2.push(20);


var resultFinal = mergeTwoList(list1.head, list2.head)


console.log(resultFinal);

function mergeTwoList(list1, list2){

	if(list1 == null){
		return list2;
	}
	if(list2 == null){
		return list1;
	}

	var result = null;


	if(list1.data <= list2.data){
		result = list1;
		result.next = mergeTwoList(list1.next, list2)
	}else{
		result = list2;
		result.next = mergeTwoList(list1, list2.next)
	}

	return result;
    
}













