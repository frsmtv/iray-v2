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

    // **** Menu items reveal ****
    $('#logoSquareBlue').mouseover(function() {
        $('#aboutLink').show();
    });
    $('#logoSquareBlue').mouseleave(function() {
        $('#aboutLink').hide();
    });

    $('#logoSquareBlue').click(function() {
        $('#news').addClass("animated fadeOutDown");
        $('#aboutLink').addClass("animated fadeOutUp");
    });




});