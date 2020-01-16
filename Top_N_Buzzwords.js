// https://leetcode.com/discuss/interview-question/344650/Amazon-Online-Assessment-Questions
 // Top N Buzzwords

// You work on a team whose job is to understand the most sought after toys for the holiday season.
// A teammate of yours has built a webcrawler that extracts a list of quotes about toys from different articles. 
// You need to take these quotes and identify which toys are mentioned most frequently. Write an algorithm that 
// identifies the top N toys out of a list of quotes and list of toys.

// Your algorithm should output the top N toys mentioned most frequently in the quotes

var numToys = 6
var topToys = 2
var toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"]
var numQuotes = 6
var quotes = [
"Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
"The new Elmo dolls are super high quality",
"Expect the Elsa dolls to be very popular this year, Elsa!",
"Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
"For parents of older kids, look into buying them a drone",
"Warcraft is slowly rising in popularity ahead of the holiday season"
];

console.log(findToy(quotes, toys, topToys, numToys));
  // output [ 'Elmo', 'Elsa' ]




  function findToy(quotes, toys, topToys, numToys) {

  //combine quotes and split the words
  let words = quotes.join(' ').split(' ');
  let hash = {};

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < toys.length; j++) {
      //replace all punctuation marks
      let newWords = words[i].replace(/[!']/g, '');
      // make all words lowercase, and look for the buzz words
      if (newWords.toLowerCase().includes(toys[j])) {
        //if words exist in hash, increment, if not, initialize
        hash[newWords] = hash[newWords] + 1 || 1;
      }
    }
  }

  console.log('=======================')
  console.log(hash)
  //sort words alphabetically if they have equal appearance
  let sorted = Object.keys(hash).sort(function (a, b) {
    if (hash[b] === hash[a]) {
      return a > b;
    }
    //otherwise, sort by number of appearance
    return hash[b] - hash[a];
  })
  console.log(sorted)
  //if toptoys is greater, return every word that appears
  if (topToys > numToys) {
    return sorted;
  }
  //if not return top toys
  else {
    let results = [];
    for (let l = 0; l < topToys; l++) {
      results.push(sorted[l]);
    };
    return results;
  }

}
