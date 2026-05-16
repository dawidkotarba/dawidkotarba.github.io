window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

// Default consent state to denied
gtag('consent', 'default', {
    'analytics_storage': 'denied'
});

gtag('js', new Date());

if (document.location.hostname.search("dawidkotarba.eu") !== -1 || document.location.hostname === 'localhost') {
    gtag('config', 'UA-159312468-1');
}
