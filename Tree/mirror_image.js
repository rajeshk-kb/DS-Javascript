
let BST = require('./create_binary_tree.js');


var util = require('util');

console.log(util.inspect(BST.root, { showHidden: true, depth: null, colors: true }))

var mirror_image = find_mirror_image(BST.root);

console.log('============')

console.log(util.inspect(mirror_image, { showHidden: true, depth: null, colors: true }))

function find_mirror_image(root) {
    if (root == null) {
        return;
    } else {
        
        find_mirror_image(root.left);
        find_mirror_image(root.right);
        swap(root.left, root.right)
    }
    return root
}

// check if two trees are mirrors
var are_mirror = check_mirror_image(BST.root, mirror_image);

console.log(are_mirror ? 'Mirror':'Not Mirror');



function check_mirror_image(root1, root2) {
    if (root1 == null && root2 == null) {
        return true;
    } 
    
   if (root1 == null || root2 == null) {
        return false;
    } 
    check_mirror_image(root1.left, root2.right);
    check_mirror_image(root1.right, root2.left);

     if(root1.value == root2.value){
        return true;
     }else{
         return false;
     }
}





// N-Array mirror image
// https://www.youtube.com/watch?v=UGzXSDZv-SY


// Create Stack and Queue and then compare stack top and queue front 
// pop and dequeue;


// Stack 
var stack = [];
function pushStack(root){
    if(root == null)
        return;

    stack.push(root);
    for (var i = 0; i < root.children.length; i++) {
        pushStack(root.children.get(i));
    }
}



// Queue
var Queue = [];
function pushQueue(root){
    if(root == null)
        return;

    for (var i = 0; i < root.children.length; i++) {
        pushQueue(root.children.get(i));
    }
    Queue.unshift(root);
}














