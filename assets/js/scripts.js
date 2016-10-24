$(document).ready(function () {
    var $black_white = $('.black_white')
        , img_width = $('.black_white img').width()
        , init_split = Math.round(img_width / 1.5);
    $black_white.width(init_split);
    $('.before_after_slider').mousemove(function (e) {
        var offX = (e.offsetX || e.clientX - $black_white.offset().left);
        $black_white.width(offX);
    });
    $('.before_after_slider').mouseleave(function (e) {
        $black_white.stop().animate({
            width: init_split
        }, 1000)
    });
    //
    $(".menu_ul, .box_arrow").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    $('#call_menu').click(function () {
        $('.menu_collapse').show('slow');
    });
    $('#hide_menu').click(function () {
        $('.menu_collapse').hide('slow');
    });
    //
    $.fn.moveIt = function () {
        var $window = $(window);
        var instances = [];
        $(this).each(function () {
            instances.push(new moveItItem($(this)));
        });
        window.onscroll = function () {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }
    }
    var moveItItem = function (el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };
    moveItItem.prototype.update = function (scrollTop) {
        var pos = scrollTop / this.speed;
        this.el.css('transform', 'translateY(' + -pos + 'px)');
    };
    $(function () {
        $('[data-scroll-speed]').moveIt();
    });
});
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    }
    , BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    }
    , iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
    , Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }
    , Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    }
    , any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (!isMobile.any()) {
    $(".").show();
}
else {
    $(".").show();
}
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