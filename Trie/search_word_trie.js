'use strict';

let Trie = require('./create_trie.js');

var util = require('util');






// check if it contains a whole word.
// time complexity: O(k), k = word length
var is_found = search_word_trie(Trie.trie, "abc");
console.log(is_found?'found':'not found');



function search_word_trie(root, word){
	
	var node = root
	var current = node;

	for(var i = 0;  i<word.length; i++){
		//console.log(node)
		//console.log('======')
		if(node.children[word[i]]){
			node = node.children[word[i]]
		}else{
			return false;
		}
		if(i == word.length-1 && node.end !== true){
            return false;
        }
	}
	return true;
}
