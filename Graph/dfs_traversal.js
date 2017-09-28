'use strict';

let graph = require('./create_graph.js');

console.log(graph.root)
console.log('==========')


function dfs(data) {
    var visitedNodes = [];
    var dfsArr = dfsRecursive('A', data, visitedNodes)  // starting node 'A'
    console.log('Following is Depth First Traversal (starting from vertex A)')
    console.log(dfsArr.join(' - '))
}

function dfsRecursive(start, data, visited) {
    visited.push(start);
    var neighbour = data.get(start)

    for(var j in neighbour){
        var neighbour_elem = neighbour[j]
        if(visited.indexOf(neighbour_elem) == -1){
            dfsRecursive(neighbour_elem, data, visited)
        }
    }
    return visited;
}

dfs(graph.root.AdjList);
