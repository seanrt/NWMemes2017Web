$(function() {
    var domain = 'https://meme-api-kvytfrztih.now.sh';
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXR1bmciLCJhIjoiY2owZnJ6eXY4MDJlbTJxc2F6OW81cnpzcSJ9.CwCldAdWdHqo90qFuK_WFA';

    // initialize map object
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
        center:[-107.2787, 39.9649], // starting position
        zoom: 3, // starting zoom
        maxZoom: 10
    });

    $.get(`${domain}/api/cities`, function(data) {
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
                $('#accordion').accordion({
                    active: 0
                });
                var title = document.getElementById('title');
                title.innerHTML = marker.cityName;
                $.get( `${domain}/api/tweets/${marker.cityName}`, function(result) {
                    var accordion = document.getElementById('accordion');
                    var images = accordion.getElementsByClassName('meme-image');
                    var tweets = accordion.getElementsByClassName('tweet');
                    var retweets = accordion.getElementsByClassName('retweets');
                    var likes = accordion.getElementsByClassName('likes');
                    var replies = accordion.getElementsByClassName('replies');
                    var resultData = result.data;
                    for (var i=0; i<resultData.length; i++) {
                        console.log( resultData[i].imageUrl)
                        images[i].src = resultData[i].imageUrl;
                        tweets[i].innerHTML = resultData[i].tweet;
                        likes[i].innerHTML = `Likes: ${resultData[i].likesCount}`;
                        retweets[i].innerHTML = `Retweets: ${resultData[i].retweetCount}`;
                        replies[i].innerHTML = `Replies: ${resultData[i].repliesCount}`;
                    }


                });
                var popup = document.getElementById('popup');
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

    setInterval(
    function() {
        $.get(`${domain}/api/poll`, function(result) {
            console.log(result);
            if(result.isReady) {
                map.flyTo({
                    center: result.location
                });
            }
        });
    }
    , 2000);

    // Add fullscreen button to the map.
    map.addControl(new mapboxgl.FullscreenControl());
    // Add geolocate button to the map.
    map.addControl(new mapboxgl.GeolocateControl());

});
