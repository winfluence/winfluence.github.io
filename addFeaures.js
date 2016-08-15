					mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbmFiZXJuc3RlaW4iLCJhIjoiY2lycDhvZ2VyMGVwMGZhbThub2Y5MnVoZiJ9.hu6uT3LggoZKmOJJMckFDA';
					var map = new mapboxgl.Map({
						container: 'map',
						style: 'mapbox://styles/mapbox/streets-v9'
					});
				
map.on('load', function () {
    map.addSource("points", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-77.03238901390978, 38.913188059745586]
                },
                "properties": {
                    "title": "Mapbox DC",
                    "icon": "monument"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-122.414, 37.776]
                },
                "properties": {
                    "title": "Mapbox SF",
                    "icon": "harbor"
                }
            }]
        }
    });

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "points",
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});