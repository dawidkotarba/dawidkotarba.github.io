// aos
AOS.init();

// lazy loading
var observer = lozad('.lozad', {
    rootMargin: '1000px 0px'
});
observer.observe();

// toggle commercial experience
$('.employment-card').click(function(){
    $(this).toggleClass('employment-card-clicked');
});