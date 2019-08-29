/* Detect Cycle in a Directed Graph */

'use strict';

let graph = require('./create_graph.js');

console.log(graph.root)
console.log('==========')


function checkCyclic(data) {
    var visited = [];
     data.forEach(function(element, key){
        if (isCyclicUtil(key, visited, data)){
            console.log("Cyclic at Node -------- "+key);
        }else{
            console.log("Not cyclic at Node -------- "+key);
        }
     });
}

function isCyclicUtil(key, visited, data) {
    if(visited.indexOf(key)<0){
        visited.push(key);
        var neighbours = data.get(key)
        for(var j in neighbours){
            var neighbour_elem = neighbours[j];
            if(visited.indexOf(neighbour_elem)<0){
                // return false;
            }else{
                return true
            }
        }
    }else{
        return false;
    }
}

checkCyclic(graph.root.AdjList);




/* 
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        graph.addEdge(2, 3);
        graph.addEdge(3, 3);

*/
