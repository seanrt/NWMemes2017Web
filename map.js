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

    $.get( "https://meme-api-lwovjepsxc.now.sh/api/cities", function(data) {
        // add each marker (in geojson) to map
        data.data.forEach(function(marker) {
            // create a DOM element for the marker
            var iconSize = 60;
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(public/img/marker_60.png)';
            el.style.width = iconSize + 'px';
            el.style.height = iconSize + 'px';

            el.addEventListener('click', function() {
                var popup = document.getElementById('popup');
                console.log(marker);
                var exit = document.getElementById('exit');
                if (popup.style.display === 'none') {
                    popup.style.display = 'block';
                    exit.style.display = 'block';
                }
            });

            // add marker to map
            new mapboxgl.Marker(el, {offset: [-iconSize / 2, -iconSize / 2]})
                .setLngLat(marker.location)
                .addTo(map);
        });
    });

    // Add fullscreen button to the map.
    map.addControl(new mapboxgl.FullscreenControl());
    // Add geolocate button to the map.
    map.addControl(new mapboxgl.GeolocateControl());

});