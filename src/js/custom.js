// toggle commercial experience
$('.employment-card').click(function () {
    if ($(window).width() >= 768) {
        $(this).toggleClass('employment-card-clicked');
    }
});

// title parallax effect on scroll
$(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    var $branding = $('.site-branding');

    // effect happens only in the header area
    if (scrollPos < 500) {
        var scale = 1 + (scrollPos / 1000); // slowly scales up
        var opacity = 1 - (scrollPos / 400); // fades out

        $branding.css({
            'transform': 'translateY(-50%) scale(' + scale + ')',
            'opacity': opacity >= 0 ? opacity : 0
        });
    }
});

// aos
AOS.init();

// hide go up button on mobile
if (window.isMobile()) {
    $('.progress-wrap').css('display', 'none');
}