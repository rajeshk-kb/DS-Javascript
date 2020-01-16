

let BST = require('./create_binary_tree.js');


postOrderTraversalByOneStack(BST.root);


function postOrderTraversalByOneStack(root){

	var p = root;

	var stack = new Array();

	while(true){
		if(p){
			stack.push(p);
			p = p.left;
		}else{
			if(stack.length == 0){
				break;
			}else{
				var top = stack.top();
				if(top.right === null){
					p = stack.pop();
					console.log(p.data);
					while(p == top.right){
						console.log(top.data);
						stack.pop();
					}
				}
				if(stack.length !== 0){
					p = top.right;
				}else{
					p = null;
				}
			}
		}
	}
}





/// Ref https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/
/// Ref https://www.youtube.com/watch?v=cviyUv2TFG8





