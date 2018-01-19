function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null
}

BinarySearchTree.prototype.insert = function(value){

	if(!this.root){
		this.root = new Node(value);
		return;
	}

	var currentRoot = this.root;

	while(currentRoot){
		if(value <= currentRoot.value){
			if(!currentRoot.left){
				currentRoot.left = new Node(value);
				break;
			}else{
				currentRoot = currentRoot.left;
			}
		}else{

			if(!currentRoot.right){
				currentRoot.right = new Node(value);
				break;
			}else{
				currentRoot = currentRoot.right;
			}
		}
	}

}

var bst = new BinarySearchTree();
bst.insert(30);
bst.insert(25);
bst.insert(35);
bst.insert(20);
bst.insert(27);
bst.insert(32);
bst.insert(40);
bst.insert(22);
bst.insert(26);
bst.insert(38);
bst.insert(50);
        
//console.log(bst)

module.exports.root = bst.root;






/// VERY MOST
// Two nodes of a BST are swapped, correct the BST   Link --> https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/