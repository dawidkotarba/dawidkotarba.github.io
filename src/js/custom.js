// toggle commercial experience
$('.employment-card').click(function () {
    $(this).toggleClass('employment-card-clicked');
});

// aos
AOS.init();

// hide go up button on mobile
if (window.isMobile()) {
    $('.progress-wrap').css('display', 'none');
}