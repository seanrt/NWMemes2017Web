$(function() {
    $('#map-container').removeClass('fade-out');
    $('#accordion').accordion({
        collapsible: true
    });
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    exit.addEventListener('click', function() {
        var popup = document.getElementById('popup');
        popup.style.display = 'none';
    });

    var toggleChat = document.getElementById('toggle-chat');
    toggleChat.addEventListener('click', function() {
        if(toggleChat.style.color === 'black') {
            toggleChat.style.color = '#3b5998';
            $('#toggle-chat').addClass("active");
            $('#chat').css('display', 'block');
        } else {
            toggleChat.style.color = 'black';
            $('#toggle-chat').removeClass("active");
            $('#chat').css('display', 'none');
        }
    });

    // setInterval(
    //     $.get( `https://andyytung.github.io`, function(result) {
    //         console.log("hi");
            
    //     }), 1000);


});
