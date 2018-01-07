'use strict';
var util = require('util')

let graph = require('./Graph/weighted_graph.js');


console.log(util.inspect(graph.root, { showHidden: true, colors: true }))


function dijkstra(data) {
    var size = data.size
     data.forEach(function(element, key){
        console.log(element)
     });
}

dijkstra(graph.root.AdjList);