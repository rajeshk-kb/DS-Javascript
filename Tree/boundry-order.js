
let BST = require('./create_binary_tree.js');






console.log(BST.root)


printBoundry(BST.root);





// 1. Print the left boundary in top-down manner.
// 2. Print all leaf nodes from left to right, which can again be sub-divided into two sub-parts:
// …..2.1 Print all leaf nodes of left sub-tree from left to right.
// …..2.2 Print all leaf nodes of right subtree from left to right.
// 3. Print the right boundary in bottom-up manner.
function printBoundry(root){

	if(root == null)
		return;


	process.stdout.write(root.value+" ");

	printBoundryLeft(root.left);
	printLeafNodes(root.left);
	printLeafNodes(root.right);
	printBoundryRight(root.right);

}

// A function to print all left boundary nodes, except a leaf node. 
// Print the nodes in TOP DOWN manner 
function printBoundryLeft(root){

	if (root == null) 
            return; 

	if(root.left !== null){
		// to ensure top down order, print the node 
        // before calling itself for left subtree 
		process.stdout.write(root.value+" ");
		printBoundryLeft(root.left);

	}else if(root.right !== null){
		process.stdout.write(root.value+" ");
		printBoundryLeft(root.right);
	}
}


function printLeafNodes(root){
	if(root === null)
		return;


	printLeafNodes(root.left);
	if(root.left == null && root.right == null)
		process.stdout.write(root.value+" ");
	printLeafNodes(root.right);
}


// A function to print all left boundary nodes, except a leaf node. 
// Print the nodes in TOP DOWN manner 
function printBoundryRight(root){

	if (root == null) 
            return; 

	if(root.right !== null){
        // to ensure bottom up order, first call for right 
        // subtree, then print this node 
		printBoundryRight(root.right);
		process.stdout.write(root.value+" ");

	}else if(root.left !== null){
		// process.stdout.write(root.data+" ");
		printBoundryLeft(root.left);
		process.stdout.write(root.value+" ");
	}
}


// Output 5 2 1 4 8 6
