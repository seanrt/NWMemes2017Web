$(function() {
    $('#map-container').removeClass('fade-out');
    $('#accordion').accordion();
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    var exit = document.getElementById('exit');
    exit.style.display = 'none';
    exit.addEventListener('click', function() {
        var popup = document.getElementById('popup');
        if (popup.style.display === 'none') {
            popup.style.display = 'block';
            exit.style.display = 'block';
        } else {
            popup.style.display = 'none';
            exit.style.display = 'none';
        }
    });
});
