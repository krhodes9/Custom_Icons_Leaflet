var lat = 10.25;
var lng = 35.25;
var zoom = 3;

var map = L.map('map', {
    zoomControl: false
}).setView([lat, lng], zoom);

var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

// custom zoom bar control that includes a Zoom Home function
L.Control.zoomHome = L.Control.extend({
    options: {
        position: 'topleft',
        zoomInText: '+',
        zoomInTitle: 'Zoom in',
        zoomOutText: '-',
        zoomOutTitle: 'Zoom out',
        zoomHomeText: '<i class="fa fa-home style="line-height:1.65;"></i>',
        zoomHomeTitle: 'Zoom home'
    },

    onAdd: function (map) {
        var controlName = 'gin-control-zoom',
            container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
            options = this.options;

        this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
        controlName + '-in', container, this._zoomIn);
        this._zoomHomeButton = this._createButton(options.zoomHomeText, options.zoomHomeTitle,
        controlName + '-home', container, this._zoomHome);
        this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
        controlName + '-out', container, this._zoomOut);

        this._updateDisabled();
        map.on('zoomend zoomlevelschange', this._updateDisabled, this);

        return container;
    },

    onRemove: function (map) {
        map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },

    _zoomIn: function (e) {
        this._map.zoomIn(e.shiftKey ? 3 : 1);
    },

    _zoomOut: function (e) {
        this._map.zoomOut(e.shiftKey ? 3 : 1);
    },

    _zoomHome: function (e) {
        map.setView([lat, lng], zoom);
    },

    _createButton: function (html, title, className, container, fn) {
        var link = L.DomUtil.create('a', className, container);
        link.innerHTML = html;
        link.href = '#';
        link.title = title;

        L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', fn, this)
            .on(link, 'click', this._refocusOnMap, this);

        return link;
    },

    _updateDisabled: function () {
        var map = this._map,
            className = 'leaflet-disabled';

        L.DomUtil.removeClass(this._zoomInButton, className);
        L.DomUtil.removeClass(this._zoomOutButton, className);

        if (map._zoom === map.getMinZoom()) {
            L.DomUtil.addClass(this._zoomOutButton, className);
        }
        if (map._zoom === map.getMaxZoom()) {
            L.DomUtil.addClass(this._zoomInButton, className);
        }
    }
});
// add the new control to the map
var zoomHome = new L.Control.zoomHome();
zoomHome.addTo(map);
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
    var clusters = L.markerClusterGroup({
      animate: true,
      animateAddingMarkers: true
    });
    clusters.addLayer(locusts);
    map.addLayer(clusters);
});


var geojsonFeature2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Location": "Mauratania"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -14.414062499999998,
              17.5602465032949
            ],
            [
              -8.61328125,
              17.5602465032949
            ],
            [
              -8.61328125,
              20.138470312451155
            ],
            [
              -14.414062499999998,
              20.138470312451155
            ],
            [
              -14.414062499999998,
              17.5602465032949
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Morocco"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -8.26171875,
              30.14512718337613
            ],
            [
              -5.2734375,
              30.14512718337613
            ],
            [
              -5.2734375,
              31.27855085894653
            ],
            [
              -8.26171875,
              31.27855085894653
            ],
            [
              -8.26171875,
              30.14512718337613
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Algeria"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -0.087890625,
              23.40276490540795
            ],
            [
              3.076171875,
              23.40276490540795
            ],
            [
              3.076171875,
              29.305561325527698
            ],
            [
              -0.087890625,
              29.305561325527698
            ],
            [
              -0.087890625,
              23.40276490540795
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Niger"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.5703125,
              14.774882506516272
            ],
            [
              6.85546875,
              14.774882506516272
            ],
            [
              6.85546875,
              19.145168196205297
            ],
            [
              4.5703125,
              19.145168196205297
            ],
            [
              4.5703125,
              14.774882506516272
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Chad"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              15.029296875,
              14.00869637063467
            ],
            [
              20.9619140625,
              14.00869637063467
            ],
            [
              20.9619140625,
              15.919073517982426
            ],
            [
              15.029296875,
              15.919073517982426
            ],
            [
              15.029296875,
              14.00869637063467
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Sudan"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              28.905029296875,
              12.31853594166211
            ],
            [
              31.970214843749996,
              12.31853594166211
            ],
            [
              31.970214843749996,
              13.571241563074146
            ],
            [
              28.905029296875,
              13.571241563074146
            ],
            [
              28.905029296875,
              12.31853594166211
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Ethiopia"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              36.123046875,
              8.059229627200192
            ],
            [
              42.5390625,
              8.059229627200192
            ],
            [
              42.5390625,
              11.005904459659451
            ],
            [
              36.123046875,
              11.005904459659451
            ],
            [
              36.123046875,
              8.059229627200192
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Saudi Arabia"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              39.90234375,
              22.268764039073968
            ],
            [
              48.69140625,
              22.268764039073968
            ],
            [
              48.69140625,
              25.3241665257384
            ],
            [
              39.90234375,
              25.3241665257384
            ],
            [
              39.90234375,
              22.268764039073968
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Yemen"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              44.12109374999999,
              14.604847155053898
            ],
            [
              49.658203125,
              14.604847155053898
            ],
            [
              49.658203125,
              16.04581345375217
            ],
            [
              44.12109374999999,
              16.04581345375217
            ],
            [
              44.12109374999999,
              14.604847155053898
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Iran"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              52.734375,
              29.6880527498568
            ],
            [
              59.4140625,
              29.6880527498568
            ],
            [
              59.4140625,
              32.69486597787505
            ],
            [
              52.734375,
              32.69486597787505
            ],
            [
              52.734375,
              29.6880527498568
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "India"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              72.421875,
              26.27371402440643
            ],
            [
              79.8046875,
              26.27371402440643
            ],
            [
              79.8046875,
              29.38217507514529
            ],
            [
              72.421875,
              29.38217507514529
            ],
            [
              72.421875,
              26.27371402440643
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Location": "Pakistan"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              65.56640625,
              27.449790329784214
            ],
            [
              69.60937499999999,
              27.449790329784214
            ],
            [
              69.60937499999999,
              28.998531814051795
            ],
            [
              65.56640625,
              28.998531814051795
            ],
            [
              65.56640625,
              27.449790329784214
            ]
          ]
        ]
      }
    }
  ]
}
var feat2 = L.geoJSON(geojsonFeature2).addTo(map);
