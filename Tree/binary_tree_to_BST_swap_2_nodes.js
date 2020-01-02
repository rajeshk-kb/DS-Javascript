'use strict';

  function Node(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
  function BinarySearchTree() {
    this.root = null;
  }
  var bst = new BinarySearchTree();

  bst.root = new Node(6); 
  bst.root.left = new Node(10); 
  bst.root.right = new Node(2); 
  bst.root.left.left = new Node(1); 
  bst.root.left.right = new Node(3); 
  bst.root.right.right = new Node(12); 
  bst.root.right.left = new Node(7); 

  
  console.log('Binary Tree --- ', bst.root)

  correctBST(bst.root);
  console.log('Binary Search Tree --- ', bst.root)


  var pre = null;
  var first = null;
  var middle = null;
  var last = null;


  function correctBSTUtil(head) {

    if (head !== null) {
      correctBSTUtil(head.left);

      if(pre && head.data<pre.data){

        if(first == null){
          first = pre;
          middle = head;
        }else{
          last = head;
        }
      }
      pre = head;
      correctBSTUtil(head.right);
    }

  }
  function correctBST(root) {

    correctBSTUtil(root);

    // Fix (or correct) the tree 
    if (first !== null && last !== null) {
      var temp = first.data;
      first.data = last.data;
      last.data = temp

    } else if (first !== null && middle !== null) {// Adjacent nodes swapped
      var temp = first.data;
      first.data = middle.data;
      middle.data = temp
    } else {
      return root; // already balanced tree
    }
  }
