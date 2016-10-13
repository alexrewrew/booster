$(document).ready(function () {
    /* VEGAS */
    $('.main_page').vegas({
        slides: [
            {
                src: 'img/slide1.jpg'
            }
            , {
                src: 'img/slide2.jpg'
            }
            , {
                src: 'img/slide3.jpg'
            }
            , {
                src: 'img/slide4.jpg'
            }
            , {
                src: 'img/slide5.jpg'
            }
        ]
    });
    /* OWL CAROUSEL */
    $('#customers').owlCarousel({
        loop: true
        , margin: 10
        , nav: true
        , items: 1
    });
    /* SLICK */
    $('.your-class').slick({});
});