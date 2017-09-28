'use strict';

let graph = require('./create_graph.js');

console.log(graph.root)
console.log('==========')


function bfs(data) {
    var visitedNodes = [];
    var Queue = new Array();

    Queue.unshift('A');  // starting node 'A'
    visitedNodes.push('A');
    while(Queue.length != 0){
        var getTop = Queue.pop();
        var neighbours = data.get(getTop)
        for(var j in neighbours){
            var neighbour_elem = neighbours[j]
            if(visitedNodes.indexOf(neighbour_elem) === -1){
                Queue.unshift(neighbour_elem);
                visitedNodes.push(neighbour_elem);
            }
        }
    }
     console.log('Following is Breadth First Traversal (starting from vertex A)')
    console.log(visitedNodes.join(' - '))
}
 

bfs(graph.root.AdjList);
