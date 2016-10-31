$(document).ready(function() {
    var $black_white = $('.black_white'),
        img_width = $('.black_white img').width(),
        init_split = Math.round(img_width / 1.63);

    $black_white.width(init_split);

    $(document).on("mousemove", function(event) {

        $black_white.width(event.pageX - $black_white.offset().left);
    });
    $("header").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    $('#call_menu').click(function() {
        $('.menu_collapse').show('slow');
    });
    $('#hide_menu').click(function() {
        $('.menu_collapse').hide('slow');
    });
    //
    if ($(window).width() > '1024') {

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

    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


});
/* before after */
/*$(function () {
    $('#call_menu').click(function () {
        $('.menu_collapse').css('left', '0');
    });
    $('#hide_menu').click(function () {
        $('.menu_collapse').css('left', '-50%');
    });
})*/
/*$(window).on('load resize', function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".brand_img").attr("src", "frontend/img/logo2.png");
        }
        else {
            $('.navbar-default').removeClass("navbar_scroll");
        }
    });
})*/
