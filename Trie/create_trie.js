'use strict';

// we start with the TrieNode
function TrieNode(key){
	this.key =  key;
	this.parent = null;
	this.children = {};
	this.end = false;
}

// we implement Trie with just a simple root with null value.
function Trie() {
  this.root = new TrieNode(null);
}
// inserts a word into the trie.
// time complexity: O(k), k = word length
Trie.prototype.insert = function(word){
	// start at the root
	var node = this.root;

	for (var i = 0; i<word.length; i++) {
		// if character node exists in children
		if(!node.children[word[i]]){
			// if it dosen't exist, we then create it
			node.children[word[i]] = new TrieNode(word[i]);

			// assign the parent to the child node.
			//node.children[word[i]].parent = node;
		}

		// procced the next depth in the trie.
		node = node.children[word[i]];

		// finally, we check to see if it is the last word.
		if(i == word.length-1){
			// if it is, we see the end flag to true;
			node.end =true;
		}
	}

}




var trie = new Trie();

trie.insert('abc');
trie.insert('abcd');
trie.insert('abs');
trie.insert('cat');
var util = require('util');
//console.log(util.inspect(trie, { showHidden: true, depth: null, colors: true }))
// console.log(trie);

module.exports.trie = trie.root