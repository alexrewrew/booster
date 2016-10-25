$(document).ready(function () {
    /* WOW.JS */
    new WOW().init();
    /* OWL CAROUSEL */
    $('#customers').owlCarousel({
        loop: true
        , margin: 10
        , nav: true
        , items: 5
        , navText: ["<img src='assets/img/left_arrow.png'>", "<img src='assets/img/right_arrow.png'>"]
        , responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
                , nav: false
            }, // breakpoint from 768 up
            768: {
                items: 3
            }
            , 1024: {
                items: 4
            }
        }
    });
    /* SLICK */
    $('.your-class').slick({});
});