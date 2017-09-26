'use strict';

let graph = require('./create_graph.js');

console.log(graph.root)
console.log('==========')


function dfs(data) {
    var visitedNodes = [];
    var dfs = dfsRecursive('A', data, visitedNodes)// 0 or 'A' or 'any node' 
    console.log('Depth First Traversal for a Graph')
    console.log(dfs.join(' - '))

}

function dfsRecursive(start, data, visited) {
    visited.push(start);
    var neighbour = data.get(start)

    for(var j in neighbour){
        var neighbour_elem = neighbour[j]
       // console.log(neighbour_elem)
        if(visited.indexOf(neighbour_elem) == -1){
            dfsRecursive(neighbour_elem, data, visited)
        }
    }
    return visited;
}


dfs(graph.root.AdjList);
