$(function() {
        
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXR1bmciLCJhIjoiY2owZnJ6eXY4MDJlbTJxc2F6OW81cnpzcSJ9.CwCldAdWdHqo90qFuK_WFA';

    // initialize map object
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
        center:[-123.120738, 49.282729], // starting position
        zoom: 3.5, // starting zoom
        maxZoom: 10
    });

    // collection of marker objects
    var geojson = {
        "type": "MemeCollection",
        "memes": [
            {
                "type": "Meme",
                "properties": {
                    "city": "Vancouver",
                    "iconSize": [60, 60]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.120738,
                        49.282729
                    ]
                }
            },
            {
                "type": "Meme",
                "properties": {
                    "city": "Edmonton",
                    "iconSize": [60, 60]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -113.4909,
                        53.5444
                    ]
                }
            },
            {
                "type": "Meme",
                "properties": {
                    "city": "Calgary",
                    "iconSize": [60, 60]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -114.0708,
                        51.0486
                    ]
                }
            },
        ]
    };

    // add each marker (in geojson) to map
    geojson.memes.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(public/img/marker_' + marker.properties.iconSize[0] + '.png)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';

        el.addEventListener('click', function() {
            var popup = document.getElementById('popup');
            var exit = document.getElementById('exit');
            if (popup.style.display === 'none') {
                popup.style.display = 'block';
                exit.style.display = 'block';
            }
        });

        // add marker to map
        new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

    // Add fullscreen button to the map.
    map.addControl(new mapboxgl.FullscreenControl());
    // Add geolocate button to the map.
    map.addControl(new mapboxgl.GeolocateControl());

});