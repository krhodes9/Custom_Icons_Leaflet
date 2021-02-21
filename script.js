var map = L.map('map').setView([10.25, 35.25], 3);

var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  $.getJSON("https://opendata.arcgis.com/datasets/b3f84bff1c514484be7f4d65098f9372_0.geojson",function(data){
    var bugIcon = L.icon({
      iconUrl: 'https://pics.freeicons.io/uploads/icons/png/16216416241579606331-512.png',
      iconSize: [60,50]
    });
    var locusts = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: bugIcon});
        marker.bindPopup(feature.properties.STARTDATE + '<br/>' + feature.properties.CAT);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(locusts);
    map.addLayer(clusters);
});
