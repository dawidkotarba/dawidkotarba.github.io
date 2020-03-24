// aos
AOS.init();

// lazy loading
var observer = lozad('.lozad', {
    rootMargin: '500px 0px'
});
observer.observe();