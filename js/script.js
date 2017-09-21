// Changing nav-bar color after scrolling

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-default");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});