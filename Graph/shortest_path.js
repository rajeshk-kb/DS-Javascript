/* Find shortest path in undirected Graph */
// Dijkstra Algorithm

var util = require('util')

'use strict';

let graph = require('./weighted_graph.js');
console.log(util.inspect("======================================================="))
console.log(util.inspect(graph, { showHidden: false, depth: null, colors: true }))
console.log(util.inspect("======================================================="))

dijkstra('A', graph.root.AdjList);


function dijkstra(start, graph) {
    var result = {}; // Result object
    var i = 0;
    graph.forEach(function (value, key) {

        if (i == 0) {
            result[key] = 0;
            i++;
        } else {
            result[key] = 1 / 0;
        }
    })

    var freezed = {}; // Don't include these freezed values in sorting.

    graph.forEach(function (obj, k) {
        var temp_result = {}; // Make a temp object for result
        for (var key in result) {
            temp_result[key] = result[key];
        }
        // delete freezed values from temp_result
        for (var key in freezed) {
            delete temp_result[key];
        }

        // Find min value in array.
        var min = findMin(temp_result);
        // Put min value in freezed object
        // So that we not include it in sorting;
        freezed[Object.keys(min)] = min[Object.keys(min)];;
        // Updates values in result
        for (o in obj) {
            var key = Object.keys(obj[o])[0]
            var value = obj[o][key] + min[Object.keys(min)];
            if (value < result[key]) {
                result[key] = value;
            }
        }
        // console.log(result)
    })
    console.log(result) // From A to anywhere.
};


// FInd minimum
function findMin(data) {
    var min = Infinity;
    var key = null;
    for (var k in data) {
        if (data[k] < min) {
            var key = k;
            min = data[k];
        }
    }
    var obj = {};
    obj[key] = min;
    return obj;
}


