var scene, fire, hunter, moth, test, owl, opn;
var count = 0, textopa = 0, opa = 1, eventStat = 1, owlStat = 1;
var body_bottom, body_upper, armL1, armL2, armR1, armR2, head, legL1, legL2, legR1, legR2, rifle;
var owl, owl_eyeL, owl_eyeR, owl_wingL, owl_wingR, eyeOpenL, eyeOpenR, eyeCloseL, eyeCloseR, owl_mouth;

var owlSound = new Audio();

var rand = function(min, max) {
    return min + Math.round(Math.random() * (max-min));
};

var init = function() {
    scene = document.querySelector('#scene');
    fire = document.querySelector('#firePivot');
    hunter = document.querySelector('.creature');
    close1 = document.querySelector('#close1');
    close2 = document.querySelector('#close2');
    close3 = document.querySelector('#close3');
    moth = document.querySelector('#moth');
    moth2 = document.querySelector('#moth2');
    moth3 = document.querySelector('#moth3');
    opn = document.querySelector('#opening');
    test = document.querySelector('#test');
    owl = document.querySelector('#owl');
    owl_eyeL = document.querySelector('#owl_eyeL');
    owl_eyeR = document.querySelector('#owl_eyeR');
    owl_wingL = document.querySelector('#owl_wingL');
    owl_wingR = document.querySelector('#owl_wingR');
    eyeOpenL = document.querySelector('#eyeOpenL');
    eyeOpenR = document.querySelector('#eyeOpenR');
    eyeCloseL = document.querySelector('#eyeCloseL');
    eyeCloseR = document.querySelector('#eyeCloseR');
    owl_mouth = document.querySelector('#owl_mouth');
    body_bottom = document.querySelector('#body_bottom');
    body_upper = document.querySelector('#body_upper');
    armL1 = document.querySelector('#armL1');
    armL2 = document.querySelector('#armL2');
    armR1 = document.querySelector('#armR1');
    armR2 = document.querySelector('#armR2');
    head = document.querySelector('#head');
    legL1 = document.querySelector('#legL1');
    legL2 = document.querySelector('#legL2');
    legR1 = document.querySelector('#legR1');
    legR2 = document.querySelector('#legR2');
    rifle = document.querySelector('#rifle');
};

window.onmousemove = function(e) {
    if(count > 100) {
    var dx = (window.innerWidth / 2 - e.pageX);
    scene.style['-webkit-transform'] = 'rotateY(' + dx * 0.03 + 'deg)';
    fire.style['-webkit-transform'] = 'rotateY(' + dx *(-0.035) +'deg)';
    hunter.style['-webkit-transform'] = 'rotateY(' + dx *(-0.01) +'deg)';
    close1.style['left'] = -60 + (dx * 0.08) + 'px';
    close2.style['right'] = -5 + (dx * -0.003) + '%';
    close3.style['left'] = 15 + (dx * 0.003) + '%';
    };
};

var opening = function() {
    if (count == 10) {
        opn.textContent = 'Make Fire...';
    };
    
    if (count < 300) {
       if (count > 100) {if (opa > 0) {opa -= 0.01;}}
       if (count > 10) {if (textopa < 1) {textopa += 0.03;}}
    };
    
    opn.style['opacity'] = opa;
    opn.style['color'] = 'rgba(255, 255, 100,' + textopa + ')';
};

var eventChange = function() {
    if(eventStat == 1) {
        eventStat = 2;
        setTimeout(function(){eventStat = 3;}, rand(3,8) * 1000);
        }
    else if(eventStat == 3) {
        eventStat = 4;
        owlStat = 2;
        
        owlSound = document.getElementById('owlSFX');
        owlSound.currentTime = 0;
        owlSound.play();  

        setTimeout(function(){owlStat = 1;}, 4000);
        setTimeout(function(){eventStat = 5;}, 500);
        }
    else if(eventStat == 5) {
        eventStat = 6;
        setTimeout(function(){eventStat = 7;}, rand(1,3) * 3000);
        }
    else if(eventStat == 7) {
        eventStat = 8;
        setTimeout(function(){eventStat = 1;}, 1000);
        }
}


var eventDo = function() {
    if(eventStat == 2) {
        body_bottom.style['-webkit-animation'] = 'body_bottom_sit 2s infinite ease-in-out';
        body_upper.style['-webkit-animation'] = 'body_upper_sit 2s infinite ease-in-out';
        armL1.style['-webkit-animation'] = 'armL1_sit 2s infinite ease-in-out';
        armL2.style['-webkit-animation'] = 'armL2_sit 2s infinite ease-in-out';
        armR1.style['-webkit-animation'] = 'armR1_sit 2s infinite ease-in-out';
        armR2.style['-webkit-animation'] = 'armR2_sit 2s infinite ease-in-out';
        head.style['-webkit-animation'] = 'head_sit 2s infinite ease-in-out';
        legL1.style['-webkit-animation'] = 'legL1_sit 2s infinite ease-in-out';
        legL2.style['-webkit-animation'] = 'legL2_sit 2s infinite ease-in-out';
        legR1.style['-webkit-animation'] = 'legR1_sit 2s infinite ease-in-out';
        legR2.style['-webkit-animation'] = 'legR2_sit 2s infinite ease-in-out';
        rifle.style['-webkit-animation'] = 'rifle_sit 2s infinite ease-in-out';
    }
    if(eventStat == 4) {
        body_bottom.style['-webkit-animation'] = 'body_bottom_sitUp .5s 1 ease-out';
        body_upper.style['-webkit-animation'] = 'body_upper_sitUp .5s 1 ease-out';
        armL1.style['-webkit-animation'] = 'armL1_sitUp .5s ease-out';
        armL2.style['-webkit-animation'] = 'armL2_sitUp .5s ease-out';
        armR1.style['-webkit-animation'] = 'armR1_sitUp .5s ease-out';
        armR2.style['-webkit-animation'] = 'armR2_sitUp .5s ease-out';
        head.style['-webkit-animation'] = 'head_sitUp .5s ease-out';
        legL1.style['-webkit-animation'] = 'legL1_sitUp .5s ease-out';
        legL2.style['-webkit-animation'] = 'legL2_sitUp .5s ease-out';
        legR1.style['-webkit-animation'] = 'legR1_sitUp .5s ease-out';
        legR2.style['-webkit-animation'] = 'legR2_sitUp .5s ease-out';
        rifle.style['-webkit-animation'] = 'rifle_sitUp .5s ease-out';
    }
    if(eventStat == 6) {
        body_bottom.style['-webkit-animation'] = 'body_bottom_seek 1s infinite ease-in-out';
        body_upper.style['-webkit-animation'] = 'body_upper_seek 1s infinite ease-in-out';
        armL1.style['-webkit-animation'] = 'armL1_seek 1s infinite ease-in-out';
        armL2.style['-webkit-animation'] = 'armL2_seek 1s infinite ease-in-out';
        armR1.style['-webkit-animation'] = 'armR1_seek 1s infinite ease-in-out';
        armR2.style['-webkit-animation'] = 'armR2_seek 1s infinite ease-in-out';
        head.style['-webkit-animation'] = 'head_seek 3s infinite ease-in-out';
        legL1.style['-webkit-animation'] = 'legL1_seek 1s infinite ease-in-out';
        legL2.style['-webkit-animation'] = 'legL2_seek 1s infinite ease-in-out';
        legR1.style['-webkit-animation'] = 'legR1_seek 1s infinite ease-in-out';
        legR2.style['-webkit-animation'] = 'legR2_seek 1s infinite ease-in-out';
        rifle.style['-webkit-animation'] = 'rifle_seek 1s infinite ease-in-out';
    }
    if(eventStat == 8) {
        body_bottom.style['-webkit-animation'] = 'body_bottom_sitDown 1s infinite ease-out';
        body_upper.style['-webkit-animation'] = 'body_upper_sitDown 1s infinite ease-out';
        armL1.style['-webkit-animation'] = 'armL1_sitDown 1s infinite ease-out';
        armL2.style['-webkit-animation'] = 'armL2_sitDown 1s infinite ease-out';
        armR1.style['-webkit-animation'] = 'armR1_sitDown 1s infinite ease-out';
        armR2.style['-webkit-animation'] = 'armR2_sitDown 1s infinite ease-out';
        head.style['-webkit-animation'] = 'head_sitDown 1s infinite ease-out';
        legL1.style['-webkit-animation'] = 'legL1_sitDown 1s infinite ease-out';
        legL2.style['-webkit-animation'] = 'legL2_sitDown 1s infinite ease-out';
        legR1.style['-webkit-animation'] = 'legR1_sitDown 1s infinite ease-out';
        legR2.style['-webkit-animation'] = 'legR2_sitDown 1s infinite ease-out';
        rifle.style['-webkit-animation'] = 'rifle_sitDown 1s infinite ease-out';
    } 
    if(owlStat == 1) {
        owl.style['-webkit-animation'] = 'owl_sleep 2s infinite ease-in-out';
        owl_eyeL.style['-webkit-animation'] = 'owl_eyeL_sleep 2s infinite ease-in-out';
        owl_eyeR.style['-webkit-animation'] = 'owl_eyeR_sleep 2s infinite ease-in-out';
        owl_wingL.style['-webkit-animation'] = 'owl_wingL_sleep 2s infinite ease-in-out';
        owl_wingR.style['-webkit-animation'] = 'owl_wingR_sleep 2s infinite ease-in-out';
        owl_mouth.style['-webkit-animation'] = 'owl_mouth_sleep 2s infinite ease-in-out';
        eyeOpenL.style['opacity'] = '0';
        eyeOpenR.style['opacity'] = '0';
        eyeCloseL.style['opacity'] = '1';
        eyeCloseR.style['opacity'] = '1';
    }
    if(owlStat == 2) {
        owl.style['-webkit-animation'] = 'owl_surp 4s infinite ease-out';
        owl_eyeL.style['-webkit-animation'] = 'owl_eyeL_surp 4s infinite ease-out';
        owl_eyeR.style['-webkit-animation'] = 'owl_eyeR_surp 4s infinite ease-out';
        owl_wingL.style['-webkit-animation'] = 'owl_wingL_surp 4s infinite ease-out';
        owl_wingR.style['-webkit-animation'] = 'owl_wingR_surp 4s infinite ease-out';
        owl_mouth.style['-webkit-animation'] = 'owl_mouth_surp 4s infinite ease-out';
        eyeOpenL.style['opacity'] = '1';
        eyeOpenR.style['opacity'] = '1';
        eyeCloseL.style['opacity'] = '0';
        eyeCloseR.style['opacity'] = '0';  
    }
}

var loop = function() {
    count++;
    opening();
    moth.style['-webkit-transform'] = 'translate3d(' + 10 * Math.sin(count * 0.3) + 'px,' + 20 * Math.cos(count * 0.1) + 'px,' + 20 * Math.cos(count * 0.3) + 'px)';
    moth2.style['-webkit-transform'] = 'translate3d(' + 4 * Math.sin(count * 0.2) + 'px,' + 5 * Math.cos(count * 0.2) + 'px,' + 10 * Math.cos(count * 0.3) + 'px)';
    moth3.style['-webkit-transform'] = 'translate3d(' + 16 * Math.sin(count * (-0.24)) + 'px,' + 16 * Math.cos(count * (-0.22)) + 'px,' + 4 * Math.cos(count * 0.3) + 'px)';
    eventChange();
    eventDo();
//     test.textContent = eventStat;
    requestAnimationFrame(loop);
};

window.onload = function() {
    init();
    loop();
};