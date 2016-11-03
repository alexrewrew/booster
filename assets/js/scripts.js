$(document).ready(function() {

    // refresh //
    document.location.href='#';

    // before afetr //
    var $black_white = $('.black_white'),
        img_width = $('.black_white img').width(),
        init_split = Math.round(img_width / 1.63);

    $black_white.width(init_split);

    $(document).on("mousemove", function(event) {

        $black_white.width(event.pageX - $black_white.offset().left);
    });

    // links //
    $("body").on("click", ".smooth", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 3000);
    });
    // menu //
    $('#call_menu').click(function() {
        $('.menu_collapse').show('slow');
    });
    $('#hide_menu, .menu_ul>li>a').click(function() {
        $('.menu_collapse').hide('slow');
    });

    // parallax //
    if ($(window).width() > '1200') {

        $.fn.moveIt = function() {
            var $window = $(window);
            var instances = [];
            $(this).each(function() {
                instances.push(new moveItItem($(this)));
            });
            window.onscroll = function() {
                var scrollTop = $window.scrollTop();
                instances.forEach(function(inst) {
                    inst.update(scrollTop);
                });
            }
        }
        var moveItItem = function(el) {
            this.el = $(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
        };
        moveItItem.prototype.update = function(scrollTop) {
            var pos = scrollTop / this.speed;
            this.el.css('transform', 'translateY(' + -pos + 'px)');
        };
    };
    $(function() {
        $('[data-scroll-speed]').moveIt();
    });

    // plus minus //
    $('.minus').click(function() {
        var $input = $('#pm');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $('#pm');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});
