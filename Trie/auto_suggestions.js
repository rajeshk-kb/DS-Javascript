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


	suggestionsRec(root, query, text){

		if(root.end && text == ''){
			console.log(query);
		}
		for(let key in root.children){

			var rChild = root.children[key];

			if(rChild.end == true ){
				console.log(query+text+rChild.key);
				if(Object.keys(rChild.children).length !== 0){
					this.suggestionsRec(rChild, query, text+rChild.key)
				}
			}else{
				this.suggestionsRec(rChild, query, text+rChild.key)
			}
		}
	}



	printAutoSuggestions(root, query){
		var node = root;

		for (let i = 0; i < query.length; i++) {
			
			// no string in the Trie has this prefix 
			if(node.children[query[i]]){
				node = node.children[query[i]];
			}else{
				return 0;
			}
		}

		// If prefix is present as a word.
		let isWord = node.end ? true:false;

		// If prefix is last node of tree (has no children) 
		let isLast = Object.keys(node.children).length == 0 ? true : false;

		if(isLast)
			return -1;


		// If there are are nodes below last matching character.

		if(!isLast){
			this.suggestionsRec(node, query, '');
			return 1;
		}
	}

}


var trie = new Trie();
trie.insert('hello');
trie.insert('dog');
trie.insert('hell');
trie.insert('cat');
trie.insert('a');
trie.insert('hel');
trie.insert('help');
trie.insert('helps');
trie.insert('helping');


var comp = trie.printAutoSuggestions(trie.root, "hel"); 

if(comp == -1)
	console.log('No other strings found with this prefix');
else if(comp == 0)
	console.log('No string found with this prefix')





