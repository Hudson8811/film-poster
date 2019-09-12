$(document).ready(function() {
    $('.content-1 .btn').click(function () {
        $('.content-1').fadeOut(500, function () {
            $('.content-2').css("display", "flex").hide().fadeIn(500);
        });
    });

    $('.menu-show').click(function () {
        $('.over-menu').fadeIn(300);
    });

    $('.close-menu').click(function () {
        $('.over-menu').fadeOut(300);
    });

});
