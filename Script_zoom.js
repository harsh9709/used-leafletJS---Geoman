// var map=L.map('map',{
//     minZoom:0,
//     maxZoom:0
//   });
var map= L.map('map',{
    // zoomDelta:0.25,
    zomSnap:0.5,
});
  var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';
  
  var positron = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: cartodbAttribution
  }).addTo(map);
  
  map.setView([0, 0], 0);
  L.control.scale().addTo(map);
  
//   setInterval(function(){
//     map.setView([0,0]);
//     setTimeout(function(){
//       map.setView([60, 0]);
//     },2000);
//   },4000);
  
  setInterval(function(){
    map.setZoom(0);
    setTimeout(function(){
        map.setZoom(1);
    }, 2000);
  }, 4000);