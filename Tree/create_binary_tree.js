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
bst.insert(5);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(4);
bst.insert(3);
bst.insert(8);
bst.insert(9);
bst.insert(7);
        
//console.log(bst)

module.exports.root = bst.root;






/// VERY MOST
// Two nodes of a BST are swapped, correct the BST   Link --> https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/