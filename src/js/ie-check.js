// Top label that IE is not supported
if (/(MSIE\ [0-9]{1})/i.test(navigator.userAgent) || /(Trident\/[7]{1})/i.test(navigator.userAgent)) {
    var ieCheckDiv = document.createElement("div");
    ieCheckDiv.innerHTML = 'Internet Explorer is not supported and the site may be (and for sure is) broken.';
    ieCheckDiv.setAttribute("style", "background-color:#000;color:#FFF;text-align:center;padding:10px;");
    document.body.insertBefore(ieCheckDiv, document.body.firstChild);
    // remove the header image as it hides the label once it appears
    document.getElementById('header').innerHTML = '';
}