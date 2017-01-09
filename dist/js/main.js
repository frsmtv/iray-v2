$(document).ready(function(){


    // **** INTRO ANIMATIONS ****
    $('#intro').click(function() {
       $('#introUp').addClass('animated fadeOutUp');
       $('#introh1').addClass('animated fadeOutUp');
       $('#introDown').addClass('animated fadeOutDown');
       $('#introh2').addClass('animated fadeOutDown');
    });


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
                'font-size': '0.6rem',
                // color: 'rgba(0, 0, 0, 0)'
        });
            // // home square color switch
            // $('#logoSquareBlack').attr('src', 'dist/img/iray-logo-black.png')

        } else {
            $('.logoSquare').css({
                width: '60px',
                height: '60px',
                'font-size': '0.8rem',
            });
        }
    });


    // **** SCROLL TO TOP ****
    $('#topBtn').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // **** MEDIA SECTIONS REVEAL ****
    $('#audioLink').click(function() {
        $('#videos').hide();
        $('#music').fadeIn();
    });

    $('#videoLink').click(function() {
        $('#music').hide();
        $('#videos').fadeIn();
    });


});