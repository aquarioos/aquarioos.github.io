function getVPHeight() {
    return window.innerHeight;
}

function getPageYTopOffset() {
    return window.pageYOffset;
}

function getPageYBottomOffset() {
    return window.pageYOffset + getVPHeight();
}

function getElementHeight(element) {
    return element.clientHeight;
}

function isBetween(elTop, elBottom, visTop, visBottom) {
    if (elTop >= elBottom || visTop >= visBottom)
        throw elTop + ' < ' + elTop + ' && ' + visTop + ' < ' + visBottom;
    return elTop <= visTop && visBottom <= elBottom
        || visTop <= elTop && elTop <= visBottom
        || visTop <= elBottom && elBottom <= visBottom;
}

function addClass(element, className) {
    if (!element.className.includes(className))
        element.className += ' ' + className;
}

function removeClass(element, className) {
    if (element.className.includes(className)) {
        element.className = element.className.replace(className, '');
    }
}

window.onload = function() {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; ++i) {
        sections[i].className = sections[i].className.replace(' loading', '');
    }
}

window.onscroll = function () {
    // var Y = window.pageYOffset;
    // var H = window.innerHeight;

    // var nav = document.getElementsByTagName('nav')[0];
    // var header = document.getElementsByTagName('header')[0];
    // if (Y > 100) {
    //     if (nav.className == '') {
    //         header.className = 'minimal';
    //         nav.className = 'minimal';
    //     }
    // } 
    // if (Y < 100) {
    //     if (nav.className == 'minimal') {
    //         header.className = '';
    //         nav.className = '';
    //     }
    // }
};

function updateSections() {
    var visibilityBegin = getPageYTopOffset() + 0.4 * getVPHeight();
    var visibilityEnd = getPageYBottomOffset() - 0.1 * getVPHeight();
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; ++i) {
        var elTop = sections[i].offsetTop;
        var elBottom = elTop + getElementHeight(sections[i]);
        if (isBetween(elTop, elBottom, visibilityBegin, visibilityEnd)) {
            addClass(sections[i], 'current');
        } else {
            // removeClass(sections[i], 'current');
        }
    }
}

function showAside() {
    var aside = document.getElementsByTagName('aside')[0];
    var hamburger = document.getElementById('hamburger');
    var curtain = document.getElementById('curtain');
    if (aside.className.includes('hidden')) {
        aside.className = aside.className.replace('hidden', 'shown');
        hamburger.className = hamburger.className.replace('shown', 'hidden');
        curtain.className = curtain.className.replace('hidden', 'shown');
    }
}
function hideAside() {
    var aside = document.getElementsByTagName('aside')[0];
    var hamburger = document.getElementById('hamburger');
    var curtain = document.getElementById('curtain');
    if (aside.className.includes('shown')) {
        aside.className = aside.className.replace('shown', 'hidden');
        hamburger.className = hamburger.className.replace('hidden', 'shown');
        curtain.className = curtain.className.replace('shown', 'hidden');
    }
}