let { DirectedGraph } = require("./Graph");
let someGraph = new DirectedGraph();
someGraph.addEdge("1", "2", 2);
someGraph.addEdge("1", "3", 4);
someGraph.addEdge("2", "3", 1);
someGraph.addEdge("2", "4", 7);
someGraph.addEdge("3", "5", 3);
someGraph.addEdge("4", "6", 1);
someGraph.addEdge("5", "4", 2);
someGraph.addEdge("5", "6", 5);
console.log(someGraph.dijkstra(1));
