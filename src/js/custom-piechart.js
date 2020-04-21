const isScrolledIntoView = (elem) => {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

// pie charts
$('.chart').easyPieChart({
    scaleColor: false,
    lineCap: "round",
    lineWidth: 8,
    size: 130,
    animate: {duration: 2000, enabled: true}
});

const animateChartsWhenVisible = (visibleElementSelector, chartSelector) => {
    let done = false;

    if (!done && !isScrolledIntoView(visibleElementSelector)) {
        $(chartSelector).each(function () {
            $(this).data('easyPieChart').update(0);
        });
    }

    window.addEventListener('scroll', function () {
        if (!done && isScrolledIntoView(visibleElementSelector)) {
            done = true;
            $(chartSelector).each(function () {
                var percent = $(this).data().percent;
                $(this).data('easyPieChart').update(percent);
            });
        }
    });
};

animateChartsWhenVisible('.hard-skills-description', '.chart-hard-skill');
animateChartsWhenVisible('.soft-skills-description', '.chart-soft-skill');