function Node(val) {
  this.data = val;
  this.leftChild = null;
  this.rightChild = null;
}

var tree = new Node(1);
tree.leftChild = new Node(2);
tree.rightChild = new Node(3);
tree.leftChild.leftChild = new Node(7);
tree.leftChild.rightChild = new Node(6);
tree.rightChild.leftChild = new Node(5);
tree.rightChild.rightChild = new Node(4);

console.log(tree)



printZigZagTraversal(tree);



// Step 1 :  push root to stack 1
// Step 2 :  pop from stack 1 and push the popped elements in stack 2 to from right to left until stack gets empty
// Step 3 :  pop from stack 2 and push the popped elements in stack 1 to from left to right until stack gets empty
// Step 4 :  move to step 1;


function printZigZagTraversal(rootNode) {

  // if null then return 
  if (rootNode == null) {
    return;
  }

  // declare two stacks 
  let currentLevel = []; // stack 1
  let nextLevel = []; // stack 2

  // push the root 
  currentLevel.push(rootNode);
  let leftToRight = true;

  // check if stack is empty 
  while (currentLevel.length !== 0) {

    // pop out of stack 
    var node = currentLevel.pop();

    // print the data in it 
    process.stdout.write(node.data + " ");

    // store data according to current order. 
    if (leftToRight) {
      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }

      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }
    }
    else {
      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }

      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }
    }

    // replace stacks if and if only current level is empty
    if (currentLevel.length == 0) {
      leftToRight = !leftToRight;
      var temp = currentLevel;
      currentLevel = nextLevel;
      nextLevel = temp;
    }
  }
}
