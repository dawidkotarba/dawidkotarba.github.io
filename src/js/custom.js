// toggle commercial experience
$('.employment-card').click(function () {
    $(this).toggleClass('employment-card-clicked');
});

// aos
AOS.init();

// lazy loading
var lozadClass = '.lozad';

// load images 1000px before it is visible
var observer = lozad(lozadClass, {
    rootMargin: '1000px 0px'
});
observer.observe();

// load images after page is rendered
// for a better performance
$(lozadClass).each(function () {
    observer.triggerLoad(this);
});

// reading progress bar
$("body").prognroll({
    height: 3,
    color: "#000000"
});

// pie charts
$(function() {
    $('.chart').easyPieChart({
        scaleColor: false,
        lineCap: "round",
        lineWidth: 8,
        size: 120
    });
});