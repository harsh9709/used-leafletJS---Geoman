
const map =L.map('map', center =new L.LatLng(20.5937, 78.9629)).setView([20.5937, 78.9629], 5, {editable: true}, {drawControl: true});

 L.control.scale().addTo(map);
// var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
// var map = L.map("map", {
//   center: center,
//   zoom: 4,
//   zoomControl: true,
//   zoomAnimation:true,
// });

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      ' Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
).addTo(map);

var geojsonFeature = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

L.geoJSON(geojsonFeature).addTo(map);





// var source = L.WMS.source("http://ows.mundialis.de/services/service?", {
//     'transparent': false
// });
//bhuvan geomorphology jharkhand wms link                https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms
                                // wms add
var wmsLayer = L.tileLayer
  .wms("http://ows.mundialis.de/services/service?", {
    layers: "TOPO-OSM-WMS",
  })
  .addTo(map);



var basemaps = {


 OpenStreetMap: L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",
  {
      layers: "TOPO-WMS",
    }
  ),
  Topography: L.tileLayer.wms(
    "http://ows.mundialis.de/services/service?",
    
  ),

  Places: L.tileLayer.wms("http://ows.mundialis.de/services/service?", {
    layers: "OSM-Overlay-WMS",
  }),

  "Topography, then places": L.tileLayer.wms(
    "http://ows.mundialis.de/services/service?",
    {
      layers: "TOPO-WMS,OSM-Overlay-WMS",
    }
  ),

  "Places, then topography": L.tileLayer.wms(
    "http://ows.mundialis.de/services/service?",
    {
      layers: "OSM-Overlay-WMS,TOPO-WMS",
    }
  ),
};

L.control.layers(basemaps).addTo(map);

basemaps.Topography.addTo(map);

//create a red polygon from an array of LatLng points
var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];

var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

//zoom the map to the polygon
map.fitBounds(polygon.getBounds());

var latlngs = [
    [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
    [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
  ];

  var latlngs = [
    [ // first polygon
      [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
      [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
    ],
    [ // second polygon
      [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
    ]
  ];
  

  let poly=[{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                85.32291412353516,
                23.337369784045585
              ],
              [
                85.35089492797852,
                23.337369784045585
              ],
              [
                85.35089492797852,
                23.357228097560146
              ],
              [
                85.32291412353516,
                23.357228097560146
              ],
              [
                85.32291412353516,
                23.337369784045585
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              85.28617858886719,
              23.360537527597938
            ],
            [
              85.30506134033203,
              23.36762888536857
            ]
          ]
        }
      }
    ]
  }]

  L.geoJSON(poly).addTo(map);




let indiaoutline= [{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              75.9814453125,
              34.56085936708384
            ],
            [
              69.345703125,
              22.024545601240337
            ],
            [
              77.54150390625,
              8.064668502396389
            ],
            [
              80.5078125,
              16.636191878397664
            ],
            [
              90.65917968749999,
              22.998851594142913
            ],
            [
              86.2646484375,
              25.24469595130604
            ],
            [
              88.154296875,
              26.352497858154024
            ],
            [
              75.234375,
              32.65787573695528
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            78.046875,
            22.917922936146045
          ]
        }
      }
    ]
  }]
  L.geoJSON(indiaoutline).addTo(map)


  const Clayer = L.circle([23.3441,85.3096], {radius: 50000,color: 'purple'}); //renders in meter
  Clayer.addTo(map);

  const Cmarker =L.circleMarker([20.4625,85.8830],{radius:90,color:'red'}); //renders in pixel

  Cmarker.addTo(map);

  const cuttack =L.marker([20.4625,85.8830])
  cuttack.addTo(map)


  const icon=L.icon({
    iconUrl:'new_marker.jpg',
   iconSize:[80,60]
  })

  const ranchi =L.marker([23.3441,85.3096],{icon});
  ranchi.addTo(map)

  
 
  

  var popup = L.popup()
  .setLatLng([20.4625,85.8830])
  .setContent('<p>this is cuttack!<br />cuttack a city in orissa state.</p>')
  .openOn(map);



var myLines = [{
  "type": "LineString",
  "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
  "type": "LineString",
  "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};

L.geoJSON(myLines, {
  style: myStyle
}).addTo(map)











// var polyline = L.polyline([[43.1, 1.2], [43.2, 1.3],[43.3, 1.2]]).addTo(map);
// polyline.enableEdit();

// map.editTools.startPolyline();  // map.editTools has been created
                                // by passing editable: true option to the map
                                // polyline.editor.continueForward();
// or
//polyline.editor.continueBackward();





// add Leaflet-Geoman controls with some options to the map  
map.pm.addControls({  
  position: 'topleft',  
  // snappingOption:true,
  oneBlock:true,
drawCircle: true,
});  

map.pm.enableDraw('Polygon', {
  snappable: false,
  snapDistance: 20,

});
map.pm.disableDraw();



