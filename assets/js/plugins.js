$(document).ready(function () {
    /* WOW.JS */
    new WOW().init();
    var $black_white = $('.black_white')
        , img_height = $('.black_white img').height()
        , init_split = Math.round(img_height / 2);
    $black_white.height(init_split);
    $('.before_after_slider').mousemove(function (e) {
        var offY = (e.offsetY || e.clientY - $black_white.offset().left);
        $black_white.height(offY);
    });
    $('.before_after_slider').mouseleave(function (e) {
        $black_white.stop().animate({
            height: init_split
        }, 1000)
    });
    /* OWL CAROUSEL */
    $('#customers').owlCarousel({
        loop: true
        , margin: 10
        , nav: true
        , items: 5
    });
    /* SLICK */
    $('.your-class').slick({});
});