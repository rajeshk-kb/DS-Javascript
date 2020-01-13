// Binary tree to BST
  function newNode(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }


  // index pointer..
  function indexPointer() {
    this.index = 0;
  }

  var root = new newNode(10);
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

  function arrayToBST(root, arr, indexP) {
    // Base Case 
    if (root == null) {
      return;
    }
    arrayToBST(root.left, arr, indexP)
    root.value = arr[indexP.index];
    indexP.index = indexP.index + 1;
    arrayToBST(root.right, arr, indexP)
  }

  function binaryTreeToBST(root) {

    if (root == null) {
      return root;

    }
    var arr = [];
    // store inorder traversal of tree in arr
    storeInorder(root, arr);

    // Sort Array
    arr.sort((a, b) => { return a - b })

    // Copy array elements back to Binary Tree 
    var index = new indexPointer();
    arrayToBST(root, arr, index);
  }
