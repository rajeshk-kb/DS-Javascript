'use strict';

var util = require('util')


function Graph() {
    this.AdjList = new Map();
}


function addVertex(adj, v, w) {
    adj.set(v, []);
    for (var key in w) {
        var obj = {};
        obj[key] = w[key]
        adj.get(v).push(obj);
    }

}

Graph.prototype.addEdge = function (v, w) {

    if (this.AdjList.get(v)) {

        for (var key in w) {
            var obj = {};
            obj[key] = w[key]
            this.AdjList.get(v).push(obj);
        }

    } else {
        addVertex(this.AdjList, v, w)
    }
}


let graph = new Graph();



// graph.addEdge('A', { B: 4, D: 8 });  https://www.youtube.com/watch?v=qx9sJ3O3JM0
// graph.addEdge('B', { A: 4, C: 3 });
// graph.addEdge('C', { B: 3, D: 4 });
// graph.addEdge('D', { A: 8, C: 4, E:7 });
// graph.addEdge('E', { D: 7 });


// graph.addEdge('A', { B: 7, C: 8 });  //  https://github.com/mburst/dijkstras-algorithm/blob/master/dijkstras.js
// graph.addEdge('B', { A: 7, F: 2 });
// graph.addEdge('C', { A: 8, F: 6, G: 4 });
// graph.addEdge('D', { F: 8 });
// graph.addEdge('E', { H: 1 });
// graph.addEdge('F', { B: 2, C: 6, D: 8, G: 9, H: 3 });
// graph.addEdge('G', { C: 4, F: 9 });
// graph.addEdge('H', { E: 1, F: 3 });


// Dijkastra Algorithm
graph.addEdge('A', { B: 2, C: 4 });     // https://www.youtube.com/watch?v=Lfb8qkXzHY0
graph.addEdge('B', { C: 1, D: 4, E: 2 });
graph.addEdge('C', { E: 3 });
graph.addEdge('D', { F: 2 });
graph.addEdge('E', { D: 3, F: 2 });
graph.addEdge('F', {});


// graph.addEdge('0', { 1: 10, 2: 6, 3:5 });
// graph.addEdge('1', { 0: 10, 3: 15});
// graph.addEdge('2', { 0: 6, 3: 4});
// graph.addEdge('3', { 0: 5, 1: 15, 2:4 });

Object.keys(graph).forEach(function(key) {
    var value = graph[key];
    console.log(value);
});
console.log(graph)

//

module.exports.root = graph;