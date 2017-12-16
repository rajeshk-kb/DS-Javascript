
// Amazon
// Given a sequence of words, print all anagrams together 
// input : ["cat", "dog", "tac", "god", "act"]
// output : "cat tac act dog god"


// http://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/


var word_Array = ["cat", "dog", "tac", "god", "act"];
//var word_Array = ["listen","triangle","silent","integral"];




printAnagramsTogether(word_Array);




function printAnagramsTogether(wordArray) {

    var index_and_words = [];


    for (var i in wordArray) {
        var obj = {};
        obj['index'] = i;
        obj['value'] = wordArray[i];
        index_and_words.push(obj)
    }

    //console.log(index_and_words)

    // Sort the individual words
    for (var key in index_and_words) {
        var str = index_and_words[key].value.split('').sort().join('');
        index_and_words[key].value = str;
    }

    //console.log(index_and_words)

    // Sort the words array. Compare individual words using compareFunction to sort
    index_and_words.sort(function (a, b) {
        var nameA = a.value.toUpperCase(); // ignore upper and lowercase
        var nameB = b.value.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    });

    //console.log(index_and_words)


    // All anagrams come together. But words are changed in words array. To print the original words, take index from the index array and use it in the original array. We get
    var arr = [];
    for (var key in index_and_words) {
        var value = word_Array[index_and_words[key].index];
        arr.push(value);
    }

    console.log(arr.join(' '))
}


// Time Complexity 
//  O(NMLogM + MNLogN