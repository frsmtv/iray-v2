$(document).ready(function(){


    // **** Navbar reduce on scroll ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.logoSquare').css({
                width: '25px',
                height: '25px',
                'font-size': '0.6rem'
            });

        } else {
            $('.logoSquare').css({
                width: '50px',
                height: '50px',
                'font-size': '1rem'
            });
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

    // **** MEDIA SECTIONS REVEAL ****
    $('#audioLink').click(function() {
        $('#videos').hide();
        $('#music').fadeIn();

        // ADD AUTO SCROLL TOP !
    });

    $('#videoLink').click(function() {
        $('#music').hide();
        $('#videos').fadeIn();

        // ADD AUTO SCROLL TOP !
    });




});