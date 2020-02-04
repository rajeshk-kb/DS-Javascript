class GetNode{
	constructor(key){
		this.key = key ? key :null;
		this.parent = null;
		this.children = {};
		this.end = false;
	}

}

class Trie{

	constructor(){
		this.root = new GetNode(null);
	}
	// Add word to trie data structure
	insert(word){
       // root node
       var node = this.root;
       for (let i = 0; i < word.length; i++) {
				// Add key to trie if not exists
				if(!node.children[word[i]]){

					node.children[word[i]] = new GetNode(word[i]);
					node.children[word[i]].parent = node;

				}
				// move to next key
				node = node.children[word[i]];

				// if its a last key of word
				if(i == word.length-1){
					node.end = true;
				}
			}
		}

	// Search word in trie
	search(word){

		var node = this.root;

		for (let i = 0; i < word.length; i++) {
			
			if(node.children[word[i]]){
				node = node.children[word[i]];
			}else{
				return false;
			}

			if(i == word.length-1 && node.end !== true){
				return false;
			}
		}
		return true;
	}
}


var trie = new Trie();
trie.insert('there');
trie.insert('their');
trie.insert('answer');
trie.insert('any');
trie.insert('bye');

var util = require('util')
// console.log(util.inspect(trie, { showHidden: false, depth: null, colors: true }))

//                        root
//                     /   \    \
//                     t   a     b
//                     |   |     |
//                     h   n     y
//                     |   |  \  |
//                     e   s  y  e
//                  /  |   |
//                  i  r   w
//                  |  |   |
//                  r  e   e
//                         |
//                         r


// Search a word in trie
var word = trie.search('ther');

// console.log(word?'Exists':'Not Exists!')




module.exports.trie = trie.root


