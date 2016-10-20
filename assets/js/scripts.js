$(document).ready(function () {
    
    $(".menu_ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    $(function () {
    $('#call_menu').click(function () {
        $('.menu_collapse').show('fast');
    });
    $('#hide_menu').click(function () {
        $('.menu_collapse').hide('fast');
    });
})
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
