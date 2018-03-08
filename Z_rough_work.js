



// Amazon Set 404
// Given a positive number, find all the nos that holds the property of all the 
// digits with absolute difference equal to 1 to its adjacent digit below that given number.
(function (num) {
    var arr = [];
    /* for (var i = 10; i < num; i++) {
        var sp = i.toString().split('');
        var diff = parseInt(sp[0]) - parseInt(sp[1]);
        if(diff === 1 || diff === -1){
            arr.push(i);
        }
    } */
    for (var i = 10; i < num; i++) {
        //console.log(i)
        var sp = i.toString().split('');
        var f = parseInt(sp[0]);
        var f = parseInt(sp[1]);

        if (f >= 2 && i < num) {
            arr.push(parseInt(f + '' + (f - 1)));
            arr.push(parseInt(f + '' + (f + 1)));
            i = parseInt(f + '' + (f + 1));
        } else if (f == 0) {
            arr.push(10);
            i++;
        } else {
            i++
        }
    }

    // console.log(arr)

})(40);

console.log('\x1b[31m%s\x1b[0m', "=================");



var arr = [1, 2, 3, 7, 5];

var start = 0, end = 0;
var sum = 0;
var num = 12;

while (start < arr.length && end < arr.length) {

    if (sum < num) {
        sum = sum + arr[end];
        end++;
    } else if (sum > num) {
        sum = sum - arr[start];
        start++;
    } else {
        break;
    }
}

console.log(start, end - 1)





function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null
}

var bst = new BinarySearchTree();

bst = new Node(6);
bst.left = new Node(10);
bst.right = new Node(2);
bst.left.left = new Node(1);
bst.left.right = new Node(3);
bst.right.right = new Node(12);
bst.right.left = new Node(7);


//console.log(bst)


correctBST(bst);
var first = null;
var prev = null;
var middle = null;
var last = null;
function correctBST(root) {
    // Initialize pointers needed 
    // for correctBSTUtil()

    correctBSTUtil(root);

    console.log(first)
    console.log(last)
    console.log(middle)
   console.log(prev)
    // Set the poiters to find out 
    // two nodes
    //correctBSTUtil( root );
}

function correctBSTUtil(root) {
    if (root != null) {
        correctBSTUtil(root.left);
        // console.log('-----------')
        // console.log(prev)

        if (prev != null && root.value <
            prev.value) {
            if (first == null) {
                first = prev;
                middle = root;
            }
            else
                last = root;
        }

        prev = root;
       // https://www.geeksforgeeks.org/gate-cs-notes-gq/
       // console.log('------')
        correctBSTUtil(root.right);
    }
}

//console.log(bst)




var num =5;
n >>= 1;


// console.log('\x1b[31m%s\x1b[0m', "=================")
//console.log(util.inspect(ll, { showHidden: true, depth: null, colors: true }))