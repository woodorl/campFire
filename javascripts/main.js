var scene;
var fire;
var moth;
var count = 0;

var init = function() {
    scene = document.querySelector('#scene');
    fire = document.querySelector('#firePivot');
    close1 = document.querySelector('#close1');
    close2 = document.querySelector('#close2');
    close3 = document.querySelector('#close3');
    moth = document.querySelector('#moth');
    moth2 = document.querySelector('#moth2');
    moth3 = document.querySelector('#moth3');
};

window.onload = function() {
    init();
    loop();
};

window.onmousemove = function(e) {
    var dx = (window.innerWidth / 2 - e.pageX);
    scene.style['-webkit-transform'] = 'rotateY(' + dx * 0.04 + 'deg)';
    fire.style['-webkit-transform'] = 'rotateY(' + dx *(-0.035) +'deg)';
    close1.style['left'] = -60 + (dx * 0.08) + 'px';
    close2.style['left'] = 960 + (dx * 0.04) + 'px';
    close3.style['left'] = 140 + (dx * 0.04) + 'px';
};

var loop = function() {
    requestAnimationFrame(loop);
    count++;
    moth.style['-webkit-transform'] = 'translate3d(' + 10 * Math.sin(count * 0.3) + 'px,' + 20 * Math.cos(count * 0.1) + 'px,' + 20 * Math.cos(count * 0.3) + 'px)';
    moth2.style['-webkit-transform'] = 'translate3d(' + 4 * Math.sin(count * 0.2) + 'px,' + 5 * Math.cos(count * 0.2) + 'px,' + 10 * Math.cos(count * 0.3) + 'px)';
    moth3.style['-webkit-transform'] = 'translate3d(' + 16 * Math.sin(count * (-0.24)) + 'px,' + 16 * Math.cos(count * (-0.22)) + 'px,' + 4 * Math.cos(count * 0.3) + 'px)';
};
