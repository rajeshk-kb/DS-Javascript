// Add two numbers represented by linked lists | Set 1

// https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/


// Input: List1: 5->6->5  // represents number 365
//        List2: 8->4->7 //  represents number 248
// Output: Resultant list: 3->1->3-1  // represents number 613



function List(key){
	this.data = key;
	this.next = null;
}


// List 1
var list1 = new List(5);
list1.next = new List(6)
list1.next.next = new List(5)

// List 1
var list2 = new List(8);
list2.next = new List(4)
list2.next.next = new List(7)



var newList = addLists(list1, list2);

console.log(newList)
function addLists(list1, list2){

	var head = null;
	var temp = null;
	var prev = null;
	var carry = 0;
	var sum = 0;

	while(list1 !== null || list2 !== null){

		sum = carry + (list1 ? list1.data : 0) + (list2 ? list2.data : 0);

		carry = (sum >= 10)? 1 : 0;  

		// update sum if it is greater than 10  
		sum = sum%10;

		// Create a new node with sum as data  
		temp = new List(sum)

		if(head == null){
			head = temp;
			head.next = prev;
		}else{
			prev.next = temp;
		}

		// Set prev for next insertion 
		prev = temp;

		if(list1){
			list1 = list1.next;
		}
		if(list2){
			list2 = list2.next
		}
	}
	  if (carry > 0){
	  	prev.next = new List(carry); 
	  } 
	return head;

}




















