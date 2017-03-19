mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXR1bmciLCJhIjoiY2owZnJ6eXY4MDJlbTJxc2F6OW81cnpzcSJ9.CwCldAdWdHqo90qFuK_WFA';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-98.420679, 55.772537], // starting position
    zoom: 3.5 // starting zoom
});


mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXN4aWFvMjMiLCJhIjoiY2owZndpeXd4MDI5bTJ3cHV3OXRiM2VoMSJ9.zBuTuTb6SUouTLMO24DStg';
var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": [60, 60]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.420679,
                    55.772537
                ]
            }
        },
    ]
};

// add markers to map
geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(public/img/small_Marker.png)';// + marker.properties.iconSize.join('/') + '/)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('click', function() {
        window.alert(marker.properties.message);
    });

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

