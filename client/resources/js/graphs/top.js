function buildTopGraph(){
  var dimension = ndx.dimension(function(d){return d.properties["nom_mun"]});

  var chart = dc.rowChart("#topGraph");

  chart
    .dimension(dimension)
    .group(dimension.group().reduceSum(function(d){return d.properties["pob1"]}))
    .gap(0)
    .rowsCap(10)
    .othersGrouper(false);

  chart.on("filtered", function(chart, filter){
    map.filterByKey("nom_mun", chart.filters())
  });

  chart.render();
  graphs.push(chart);
}

// function buildTopGraph(){
//   var dimension = ndx.dimension(function(d){return +d.properties["pob1"]});
//
//   var chart = dc.rowChart("#topGraph");
//
//   chart
//     .dimension(dimension)
//     .group(dimension.group())
//     .gap(0)
//     .rowsCap(10)
//     .othersGrouper(false);
//
//   chart.on("filtered", function(chart, filter){
//     map.filterByKey("nom_mun", chart.filters());
//   });
//
//   chart.render();
//   graphs.push(chart);
// }
