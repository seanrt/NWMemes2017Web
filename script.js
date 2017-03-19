document.body.className += 'fade-out';
$(function() {
    $('body').removeClass('fade-out');
    $('#accordion').accordion();
    var accordion = document.getElementById('accordion');
    accordion.style.display = 'none';

    var exit = document.getElementById('exit');
    exit.style.display = 'none';
    exit.addEventListener('click', function() {
        var accordion = document.getElementById('accordion');
        if (accordion.style.display === 'none') {
            accordion.style.display = 'block';
            exit.style.display = 'block';
        } else {
            accordion.style.display = 'none';
            exit.style.display = 'none';
        }
    });
});
