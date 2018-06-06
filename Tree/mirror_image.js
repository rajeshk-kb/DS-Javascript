
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
        var temp = null;
        find_mirror_image(root.left);
        find_mirror_image(root.right);
        temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    return root
}

// check if two trees are mirrors
var are_mirror = check_mirror_image(BST.root, mirror_image);

console.log('==================');
console.log(are_mirror ? 'Mirror':'Not Mirror');



function check_mirror_image(root1, root2) {
    if (root1 == null && root2 == null) {
        console.log('123')
        return true;
    } 
    
   if (root1 == null || root2 == null) {
    console.log('1234')
        return false;
    } 
    check_mirror_image(root1.left, root2.right);
    check_mirror_image(root1.right, root2.left);

     if(root1.value == root2.value){
        console.log('12345')
        return true;
     }else{
        console.log('123456')
         return false;
     }
    
}