'use strict';

let Trie = require('./create_trie.js');

var util = require('util');






//console.log(util.inspect(Trie, { showHidden: true, depth: null, colors: true }))
// check contains method
var is_found = search_word_trie(Trie.trie, "abc");
console.log(is_found?'found':'not found');



function search_word_trie(root, word){
	
	var node = root

	for(var i = 0;  i<word.length; i++){
		//console.log(node)
		//console.log('======')
		if(node.children[word[i]]){
			node = node.children[word[i]]
		}else{
			return false;
		}
	}
	return true;
}
