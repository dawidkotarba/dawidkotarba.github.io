// lazy loading
const lozadClass = '.lozad';

// load images 1000px before it is visible
const observer = lozad(lozadClass, {
    rootMargin: '1000px 0px'
});
observer.observe();

// load images after page is rendered
// for a better performance
$(lozadClass).each(function () {
    observer.triggerLoad(this);
});