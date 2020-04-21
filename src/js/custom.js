// toggle commercial experience
$('.employment-card').click(function () {
    $(this).toggleClass('employment-card-clicked');
});

// aos
AOS.init();

// reading progress bar
$("body").prognroll({
    height: 3,
    color: "#000000"
});