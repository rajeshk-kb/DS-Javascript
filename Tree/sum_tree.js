// https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-sumtree/

// Check if a given Binary Tree is SumTree


//        26
//       /   \
//      10     3
//    /    \     \
//   4      6      3


function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null
}

var bst = new BinarySearchTree();

bst = new Node(26);
bst.left = new Node(10);
bst.right = new Node(3);
bst.left.left = new Node(4);
bst.left.right = new Node(6);
bst.right.right = new Node(3);



/* Utillity function to check if the given node is leaf or not */
function isLeaf(node) {
    if (node == null)
        return 0;
    if (node.left == null && node.right == null)
        return 1;
    return 0;
}

function isSumTree(node) {
    var ls; // for sum of nodes in left subtree
    var rs; // for sum of nodes in right subtree

    /* If node is null or it's a leaf node then
       return true */
    if (node == null || isLeaf(node))
        return 1;

    if (isSumTree(node.left) && isSumTree(node.right)) {
        // Get the sum of nodes in left subtree
        if (node.left == null)
            ls = 0;
        else if (isLeaf(node.left))
            ls = node.left.value;
        else
            ls = 2 * (node.left.value);

        // Get the sum of nodes in right subtree
        if (node.right == null)
            rs = 0;
        else if (isLeaf(node.right))
            rs = node.right.value;
        else
            rs = 2 * (node.right.value);

        /* If root's value is equal to sum of nodes in left
           and right subtrees then return 1 else return 0*/
        return (node.value == ls + rs);
    }

    return 0;
}
console.log(isSumTree(bst));


