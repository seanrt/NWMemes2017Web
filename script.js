$(function() {
    $('#map-container').removeClass('fade-out');
    $('#accordion').accordion();
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    exit.addEventListener('click', function() {
        var popup = document.getElementById('popup');
        popup.style.display = 'none';
    });
});
