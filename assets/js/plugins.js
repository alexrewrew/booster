$(document).ready(function () {
    /* WOW.JS */
    new WOW().init();
    
    /* OWL CAROUSEL */
    $('#customers').owlCarousel({
        loop: true
        , margin: 10
        , nav: true
        , items: 5,
        navText: ["<img src='assets/img/left_arrow.png'>","<img src='assets/img/right_arrow.png'>"]
    });
    /* SLICK */
    $('.your-class').slick({});
});