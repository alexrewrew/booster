$(document).ready(function () {
    /* ICHECK */
    $('.icheck_input').iCheck({
        checkboxClass: 'icheckbox_square'
        , radioClass: 'iradio_square'
        , increaseArea: '20%' // optional
    });
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
    
});