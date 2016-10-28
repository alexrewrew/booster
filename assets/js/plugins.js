$(document).ready(function () {
    /* OWL CAROUSEL */
    $('#customers').owlCarousel({
        loop: true
        , margin: 10
        , nav: true
        , items: 5
        , navText: ["<img src='assets/img/left_arrow.png'>", "<img src='assets/img/right_arrow.png'>"]
        , responsive: {
            0: {
                items: 2
                , nav: false
            },
            768: {
                items: 3
            }
            , 1024: {
                items: 5
            }
        }
    });
});
