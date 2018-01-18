// https://www.geeksforgeeks.org/greedy-algorithms-set-6-dijkstras-shortest-path-algorithm/

// Greedy Algorithms | Set 7 (Dijkstra’s shortest path algorithm)


'use strict';


          // A  B  C  D  E  F
var arr =  [[0, 2, 4, 0, 0, 0], // A
            [0, 0, 1, 4, 2, 0], // B
            [0, 0, 0, 0, 3, 0], // C
            [0, 0, 0, 0, 3, 2], // D
            [0, 0, 0, 0, 0, 2], // E
            [0, 0, 0, 0, 0, 0]] // F



function dijkstra(graph, src) {

    var n = 6; //size of graph

    var dist = [];
    var visitedNodes = [];

    for (let i = 0; i < n; i++) {
        dist.push(Infinity);
        visitedNodes.push(false);
    }

    dist[src] = 0;


    for (let count = 0; count < n-1; count++) {
        var u = minDistance(dist, visitedNodes, n);// min value in dist array
        visitedNodes[u] = true;

        for (let v = 0; v < n; v++) {
            if (!visitedNodes[v] && graph[u][v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    console.log(dist)
}

dijkstra(arr, 0);






function minDistance(dist, visitedNodes, n) {
    // Initialize min value
    var min = Infinity;
    var min_index = null;

    for (let v = 0; v < n; v++) {
        if (!visitedNodes[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

// Output : [0, 2, 3, 6, 4, 6]