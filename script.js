var map = L.map('map').setView([15.4542, 18.7322], 4);

var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

 var bugIcon = L.icon({
    iconUrl:'https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-police-front-01-512.png',
    iconSize: [50,40]
  });
  
$.getJSON("https://opendata.arcgis.com/datasets/b3f84bff1c514484be7f4d65098f9372_0.geojson",function(data){
  var bugIcon = L.icon({
    iconUrl: '<div>Icons made by <a href="https://cdn2.iconfinder.com/data/icons/spring-outline-6/272/spring-dragonfly-insect_-dragon-lake-fly-bug-512.png',
    iconSize: [50,40]
  });
   
L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: bugIcon});
    }
  }  ).addTo(map);
});
