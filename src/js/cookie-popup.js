(function () {
    if (!localStorage.getItem('cookieconsent')) {
        document.body.innerHTML += '\
		<div class="cookiePopup cookieconsent animated fadeInUp">\
			This site uses cookies to ensure you get the best experience. <a href="#" class="cookieBtn">Accept</a>\
		</div>\
		';
        document.querySelector('.cookieconsent a').onclick = function (e) {
            e.preventDefault();
            document.querySelector('.cookieconsent').style.display = 'none';
            localStorage.setItem('cookieconsent', true);
        };
    }
})();