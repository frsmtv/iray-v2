$(document).ready(function(){


    // **** Navbar fadeOut on scroll ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#homeNav').addClass("animated fadeOutUp");
        } else {
            $('#homeNav').removeClass("animated fadeOutUp").addClass("animated fadeInDown");
        }
    });

    // **** MENU ****

    $('#logoSquareBlue').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#aboutLink').addClass("animated fadeOut");
        $('#about').addClass("animated fadeOutDown");

    });


    $('#logoSquareMagenta').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#mediasLink').addClass("animated fadeOut");
    });


    $('#logoSquareYellow').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#contactLink').addClass("animated fadeOut");
    });

    // **** SCROLL TO TOP ****
    $('#topBtn').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });





});