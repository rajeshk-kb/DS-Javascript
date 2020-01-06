
//https://www.geeksforgeeks.org/count-number-of-substrings-with-exactly-k-distinct-characters/


var str = 'abcbaa'
var res = 0;
var k = 2;
var n = str.length;
// To store count of characters from 'a' to 'z' 
var cnt = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
// Initialize array size 26 with 0;


for (var i = 0; i < n; i++) {
  var dist_count = 0;
  // Initialize array size 26 with 0;
  // for (var k = 0; k < 26; k++) {
    cnt = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  
  // Consider all substrings between str[i..j] 
  for (var j = i; j < n; j++) {
    // If this is a new character for this 
    // substring, increment dist_count. 

    var nn = str.charCodeAt(j) - 'a'.charCodeAt()
    if (cnt[nn] == 0)
      dist_count++;

    // Increment count of current character 
    cnt[nn]++;

    // If distinct character count becomes k, 
    // then increment result. 
    if (dist_count == k)
      res++;
  }
}

console.log(res); 
