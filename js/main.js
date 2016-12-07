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

    // **** HOME PAGE ****

    // **** HOME PAGE Menu items reveal ****
    // **** About link ****
    $('#logoSquareBlue').mouseover(function() {
        $('#aboutLink').fadeIn(300);
    });
    $('#logoSquareBlue').mouseleave(function() {
        $('#aboutLink').fadeOut(300);
    });

    $('#logoSquareBlue').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#aboutLink').addClass("animated fadeOut");
        $('#about').addClass("animated fadeOutDown");

    });

    // **** Medias link ****
    $('#logoSquareMagenta').mouseover(function() {
        $('#mediasLink').fadeIn(300);
    });
    $('#logoSquareMagenta').mouseleave(function() {
        $('#mediasLink').fadeOut(300);
    });

    $('#logoSquareMagenta').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#mediasLink').addClass("animated fadeOut");
    });

    // **** Contact link ****
    $('#logoSquareYellow').mouseover(function() {
        $('#contactLink').fadeIn(300);
    });
    $('#logoSquareYellow').mouseleave(function() {
        $('#contactLink').fadeOut(300);
    });

    $('#logoSquareYellow').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#contactLink').addClass("animated fadeOut");
    });

    // **** ABOUT ****





});