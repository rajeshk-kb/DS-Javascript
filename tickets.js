// https://www.geeksforgeeks.org/find-itinerary-from-a-given-list-of-tickets/
// Find Itinerary from a given list of tickets

var tickets = ['Chennai Bangalore', 'Bombay Delhi', 'Goa Chennai', 'Delhi Goa'];

var map = new Map();
var rev_map = new Map();

for (var i = 0; i < tickets.length; i++) {
    var val = tickets[i].split(' ');

    map.set(val[0], val[1]);
    rev_map.set(val[1], val[0]);
}


// Find the starting point of itinerary
var start = null;
for (var [key, value] of map) {
    //console.log(key + ' = ' + value);
    if (!rev_map.has(key)) {
        start = key;
        break;
    }
}
// If we could not find a starting point, then something wrong with input
if (start == null) {
    console.log('Invalid Input')
}

// Once we have starting point, we simple need to go next, next
// of next using given hash map
var to = map.get(start);
while (to != null) {
    process.stdout.write(start + "->" + to + ", ");
    start = to;
    to = map.get(to);
}
