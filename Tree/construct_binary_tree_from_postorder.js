

var post = [1, 7, 5, 50, 40, 10]


// Class containing variable that keeps a track of overall calculated postindex 
function Index() {
  var postindex = 0;
}
// ----- or ------- //
/* 
class Index {
constructor() {
  this.postindex = 0;
}
  } 
*/


var index = new Index(); // Create index for reference pointer
index.postindex = post.length - 1;
var tree = constructBinaryTree(post, index, post[index.postindex], -Infinity, Infinity)
console.log(tree)


// Make a new Node 
function newNode(key) {
  this.data = key;
  this.right = null;
  this.right = null;
}

function constructBinaryTree(post, postIndex, key, min, max) {
  // Base case 
  if (postIndex.postindex < 0) {
    return null;
  }

  var root = null;
  // If current element of post[] is  in range, then only it is part  of current subtree 
  if (key > min && key < max) {
    // Allocate memory for root of this  subtree and decrement *postIndex 
    root = new newNode(key);
    postIndex.postindex = postIndex.postindex - 1

    if (postIndex.postindex >= 0) {
      root.right = constructBinaryTree(post, postIndex, post[postIndex.postindex], key, max);
      root.left = constructBinaryTree(post, postIndex, post[postIndex.postindex], min, key);
    }
  }
  return root;
}
