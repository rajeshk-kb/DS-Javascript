    'use strict';
    // https://www.geeksforgeeks.org/diameter-of-a-binary-tree-in-on-a-new-method/
    // Diameter of a Binary Tree in O(n) [A new method]

    let BST = require('./create_binary_tree.js');

    var util = require('util');

    //console.log(util.inspect(BST, { showHidden: true, depth: null, colors: true }))

    function height(root){
        if(root == null){
            return 0;
        }
        var hl = height(root.left);
        var hr = height(root.right);
        
        return Math.max(hl, hr)+1;
    }

    function diameter(root) {
        if(root == null){
            return 0;
        }
        var height_l = height(root.left);
        var height_r = height(root.right);

        var dl = diameter(root.left);
        var dr = diameter(root.right);
        var final_diameter = Math.max((height_l+height_r), Math.max(dl, dr));
        return final_diameter;
    }


    var d = diameter(BST.root);

    console.log(d)

   



