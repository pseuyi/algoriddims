/*
for a unidirected graph with max deg D, find a graph coloring with max D+1 colors
*/

function GraphNode(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];

console.log(graph[0])

function colorGraph(graph) {
  // traverse graph
  // each degree from head node should be a new color
  
}
