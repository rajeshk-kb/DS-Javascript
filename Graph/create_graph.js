
function Graph() {
    this.AdjList = new Map();
}


function addVertex(adj, v, w){
    adj.set(v, []);
    adj.get(v).push(w);

    /* For undirected graph */
    // ---- start ------
   if(!adj.get(w)){
        adj.set(w, []);
        adj.get(w).push(v);
    }
    // ---- end ------
}


Graph.prototype.addEdge = function (v, w) {
    if(this.AdjList.get(v)){
        this.AdjList.get(v).push(w);

        /* For undirected graph */
        // ---- start ------
        if(!this.AdjList.get(w)){
            addVertex(this.AdjList, w, v)
        }else{
            this.AdjList.get(w).push(v);
        }
        // ---- end ------
        
    }else{
        addVertex(this.AdjList, v, w)
    }
}


let graph = new Graph();

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// // graph.addEdge(1, 2);
// graph.addEdge(2, 0);
// graph.addEdge(2, 3);
// graph.addEdge(3, 3);
// graph.addEdge(0, 1);
// graph.addEdge(0, 4);
// graph.addEdge(1, 2);
// graph.addEdge(1, 3);
// graph.addEdge(1, 4);
// graph.addEdge(2, 3);
// graph.addEdge(3, 4);

/* Example 1 */
        // graph.addEdge('A', 'B');
        // graph.addEdge('A', 'E');
        // graph.addEdge('A', 'D');
        // graph.addEdge('B', 'C');
        // graph.addEdge('C', 'E');
        // graph.addEdge('C', 'F');
        // graph.addEdge('D', 'E');


/* Example 2 */
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'D');
        graph.addEdge('A', 'G');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'G');
        graph.addEdge('F', 'C');
        graph.addEdge('F', 'D');
        graph.addEdge('C', 'H');
        
console.log(graph)
                      /*  Output of directed graph   */
/* 
                            Graph {
                            AdjList: 
                            Map {
                                0 => [ 1, 4 ],
                                1 => [ 0, 2, 3, 4 ],
                                4 => [ 0, 1, 3 ],
                                2 => [ 1, 3 ],
                                3 => [ 1, 2, 4 ] } }
*/

                      /*  Output of undirected graph   */
/* 
                            Graph {
                            AdjList: 
                            Map {
                                0 => [ 1, 4 ],
                                1 => [ 0, 2, 3, 4 ],
                                4 => [ 0, 1, 3 ],
                                2 => [ 1, 3 ],
                                3 => [ 1, 2, 4 ] } }
*/


module.exports.root = graph;