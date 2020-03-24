// aos
AOS.init();

// lazy loading
var observer = lozad('.lozad', {
    rootMargin: '200px 0px'
});
observer.observe();