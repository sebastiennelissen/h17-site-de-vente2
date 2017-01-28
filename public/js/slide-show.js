$(document).ready(function () {
    var timer = setInterval(function () {
        $(".slideshow-text").fadeOut('slow');
        $(".slideshow ul").fadeOut('slow', function () {
            $(this).find("li:last").after($(this).find("li:first"));
        });
        $(".slideshow ul").fadeIn('slow');
        $(".slideshow-text").fadeIn();
    }, 6200);

    $('.right').click(function () {
        clearInterval(timer);
        $(".slideshow-text").fadeOut('slow');
        $(".slideshow ul").fadeOut('slow', function () {
            $(this).find("li:last").after($(this).find("li:first"));
        });
        $(".slideshow ul").fadeIn('slow');
        $(".slideshow-text").fadeIn();
    });

    $('.left').click(function () {
        clearInterval(timer);
        $(".slideshow-text").fadeOut('slow');
        $(".slideshow ul").fadeOut('slow', function () {
            $(this).find("li:first").before($(this).find("li:last"));
        });
        $(".slideshow ul").fadeIn('slow');
        $(".slideshow-text").fadeIn();
    });
});

$(".slideshow").css('height', $(".slideshow").height());
$(".images-preview").css('height', $(".slideshow").height());

