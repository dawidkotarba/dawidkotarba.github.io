(function () {
    const consent = localStorage.getItem('cookieconsent');
    if (consent === null) {
        document.body.innerHTML += '\
		<div class="cookiePopup cookieconsent animated fadeInUp">\
			<div class="cookieContent">\
				This site uses cookies to ensure you get the best experience. Read our <a href="privacy-policy.html" target="_blank">Privacy Policy</a>.\
			</div>\
			<div class="cookieActions">\
				<a href="#" class="cookieBtn acceptBtn">Accept All</a>\
				<a href="#" class="cookieBtn declineBtn">Necessary Only</a>\
			</div>\
		</div>\
		';

        document.querySelector('.acceptBtn').onclick = function (e) {
            e.preventDefault();
            handleConsent(true);
        };

        document.querySelector('.declineBtn').onclick = function (e) {
            e.preventDefault();
            handleConsent(false);
        };
    }

    function handleConsent(isAccepted) {
        document.querySelector('.cookieconsent').style.display = 'none';
        localStorage.setItem('cookieconsent', isAccepted);
        if (isAccepted) {
            enableGA();
        }
    }

    function enableGA() {
        // Trigger GA if it was already loaded but waiting for consent
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    // On page load, if consent is already given, ensure GA knows
    if (consent === 'true') {
        enableGA();
    }
})();
