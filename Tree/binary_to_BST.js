// Binary tree to BST
  function newNode(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  root = new newNode(10);
  root.left = new newNode(30);
  root.right = new newNode(15);
  root.left.left = new newNode(20);
  root.right.right = new newNode(5);



//Steps ..
// 1. Store inorder traversal to array 
// 2. Sort array, sorted array represests as BST.
// 3. Copy array elements back to Binary Tree through inorder traversal

  console.log("Binary Tree - ", root);
  binaryTreeToBST(root);
  console.log("Binary Search Tree(BST) - ", root);




function storeInorder(root, arr) {
  // Base Case 
  if (root == null) {
    return;
  }
  storeInorder(root.left, arr)
  arr.push(root.value);
  storeInorder(root.right, arr)
}

var INDEX = 0
function arrayToBST(root, arr) {
  // Base Case 
  if (root == null) {
    return;
  }
  arrayToBST(root.left, arr)
  root.value = arr[INDEX];
  INDEX = INDEX+1;
  arrayToBST(root.right, arr)
}

function binaryTreeToBST(root) {

  if (root == null) {
    return root;

  }
  var arr = [];
  // store inorder traversal of tree in arr
  storeInorder(root, arr);

  // Sort Array
  arr.sort((a, b)=>{return a-b})
 
  // Copy array elements back to Binary Tree 
  arrayToBST(root, arr); 
}
