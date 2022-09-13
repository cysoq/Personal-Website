function animateText(i) {

    if (i == 361) {
        i = 0;
    }
    document.getElementById("rainbowText").style.color = 'hsl('+ i +', 97%, 64%)';
    setTimeout(function() {
        animateText(++i)
    }, 50);
}
animateText(0);