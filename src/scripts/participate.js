(() => {

var width = 150,
  height = 150;
var color = d3.scale.category20();
var radius = 7

var force = d3.layout.force()
  .charge(-17)
  .friction(0.9)
  .linkDistance(30)
  .size([width, height]);

var svg = d3.select("#participate-plot").append("svg")
  .attr("width", width)
  .attr("height", height);

var graph = getData();
console.log("GRAPH", graph)
var nodes = graph.nodes;
var nodeMap = {};

graph.nodes.forEach(function(d) { nodeMap[d.name] = d; });
console.log("nodeMap", nodeMap)
graph.links.forEach(function(l) {
  l.source = nodeMap[l.source];
  l.target = nodeMap[l.target];
})

force.nodes(graph.nodes)
  .links(graph.links)
  .start();

var link = svg.selectAll(".link")
  .data(graph.links)
  .enter().append("line")
  .attr("class", "link")
  .style("stroke-width", function(d) {
      return Math.sqrt(d.value)+1;
  });

var node = svg.selectAll(".node")
  .data(graph.nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("r", radius)
  .style("fill", function(d) { return d.group; })
  .call(force.drag);


node.append("title")
  .text(function(d) { return d.name; });

force.on("tick", function() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});


function getData() {

return {
"nodes":[
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},
    {"name":"Participant","group":"#bef264"},

//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
//   {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},
  // {"name":"stkbl0001","group":"#8ae6fb"},

//   {"name":"stkbl0001","group":"#bef264"},

],
"links":[
 
] };    
  
}

})()
