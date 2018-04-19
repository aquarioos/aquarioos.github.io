window.onload = function () {
    TweenLite.delayedCall(0.2, function () {
        TweenLite.to("nav", 0.8, {opacity: 1, ease: Power2.easeOut});
    });
    TweenLite.delayedCall(0.1, function () {
        TweenLite.to("#first", 0.4, {opacity: 1, ease: Power2.easeOut});
    });

    TweenLite.delayedCall(0.5, function () {
        TweenLite.to("#logo_tooth", 1.5, {opacity: 1, ease: Power2.easeOut});
    });
    TweenLite.delayedCall(0.5, function () {
        TweenLite.to("#logo_name", 2.5, {opacity: 1, ease: Power2.easeIn});
    });
    TweenLite.delayedCall(2, function () {
        TweenLite.to("#first_adress", 2, {opacity: 1, ease: Power2.easeIn});
    });
    TweenLite.delayedCall(1, function () {
        TweenLite.to("#logo_border", 2, {'border-color': 'rgba(255, 255, 255, 1)', ease: Power2.easeIn});
    });
};

function smoothScroll(id) {
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top
    }, 500);
}

function showNav() {
    TweenLite.to('#curtain', 0.2, {left: 0});
    TweenLite.delayedCall(0, function () {
        TweenLite.to("#hamburger_container", 0.2, {top: -50, ease: Power2.easeIn});
    });
    TweenLite.delayedCall(0.2, function () {
        TweenLite.to("nav", 0.3, {left: 0});
    });
}

function hideNav() {
    TweenLite.to("nav", 0.2, {left: '-200px'});
    TweenLite.delayedCall(0, function () {
        TweenLite.to("#hamburger_container", 0.2, {top: 0, ease: Power2.easeIn});
    });
    TweenLite.delayedCall(0.2, function () {
        TweenLite.to('#curtain', 0.3, {left: '100vw'});
    });
}

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lng: 52.181093, lat: 21.012212},
        zoom: 8
    });
}

// function showFullLogo() {
//     console.log('showFullLogo');
//     var logoName = document.getElementById('logo_name');
//     console.log(logoName);
//     TweenLite.fromTo(logoName, 2, {opacity: 0}, {opacity: 1});
//     console.log(TweenLite.fromTo);
// }
//
// function getVPHeight() {
//     return window.innerHeight;
// }
//
// function getPageYTopOffset() {
//     return window.pageYOffset;
// }
//
// function getPageYBottomOffset() {
//     return window.pageYOffset + getVPHeight();
// }
//
// function getElementHeight(element) {
//     return element.clientHeight;
// }
//
// function isBetween(elTop, elBottom, visTop, visBottom) {
//     if (elTop >= elBottom || visTop >= visBottom)
//         throw elTop + ' < ' + elTop + ' && ' + visTop + ' < ' + visBottom;
//     return elTop <= visTop && visBottom <= elBottom
//         || visTop <= elTop && elTop <= visBottom
//         || visTop <= elBottom && elBottom <= visBottom;
// }
//
// function addClass(element, className) {
//     if (!element.className.includes(className))
//         element.className += ' ' + className;
// }
//
// function removeClass(element, className) {
//     if (element.className.includes(className)) {
//         element.className = element.className.replace(className, '');
//     }
// }
//
// window.onload = function() {
//     var sections = document.getElementsByTagName('section');
//     for (var i = 0; i < sections.length; ++i) {
//         sections[i].className = sections[i].className.replace(' loading', '');
//     }
// }
//
// window.onscroll = function () {
//     // var Y = window.pageYOffset;
//     // var H = window.innerHeight;
//
//     // var nav = document.getElementsByTagName('nav')[0];
//     // var header = document.getElementsByTagName('header')[0];
//     // if (Y > 100) {
//     //     if (nav.className == '') {
//     //         header.className = 'minimal';
//     //         nav.className = 'minimal';
//     //     }
//     // }
//     // if (Y < 100) {
//     //     if (nav.className == 'minimal') {
//     //         header.className = '';
//     //         nav.className = '';
//     //     }
//     // }
// };
//
// function updateSections() {
//     var visibilityBegin = getPageYTopOffset() + 0.4 * getVPHeight();
//     var visibilityEnd = getPageYBottomOffset() - 0.1 * getVPHeight();
//     var sections = document.getElementsByTagName('section');
//     for (var i = 0; i < sections.length; ++i) {
//         var elTop = sections[i].offsetTop;
//         var elBottom = elTop + getElementHeight(sections[i]);
//         if (isBetween(elTop, elBottom, visibilityBegin, visibilityEnd)) {
//             addClass(sections[i], 'current');
//         } else {
//             // removeClass(sections[i], 'current');
//         }
//     }
// }
//
// function showAside() {
//     var aside = document.getElementsByTagName('aside')[0];
//     var hamburger = document.getElementById('hamburger');
//     var curtain = document.getElementById('curtain');
//     if (aside.className.includes('hidden')) {
//         aside.className = aside.className.replace('hidden', 'shown');
//         hamburger.className = hamburger.className.replace('shown', 'hidden');
//         curtain.className = curtain.className.replace('hidden', 'shown');
//     }
// }
// function hideAside() {
//     var aside = document.getElementsByTagName('aside')[0];
//     var hamburger = document.getElementById('hamburger');
//     var curtain = document.getElementById('curtain');
//     if (aside.className.includes('shown')) {
//         aside.className = aside.className.replace('shown', 'hidden');
//         hamburger.className = hamburger.className.replace('hidden', 'shown');
//         curtain.className = curtain.className.replace('shown', 'hidden');
//     }
// }
//
// const PHOTOS = [
//     {
//         title: 'Photo 1',
//         description: [
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//         ],
//         img: 'img/photo1.jpg'
//     },
//     {
//         title: 'Photo 2',
//         description: [
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//         ],
//         img: 'img/photo2.jpg'
//     },
//     {
//         title: 'Photo 3',
//         description: [
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//         ],
//         img: 'img/photo1.jpg'
//     },
//     {
//         title: 'Photo 4',
//         description: [
//             'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//         ],
//         img: 'img/photo2.jpg'
//     },
// ]
//
// function showGallery(id) {
//     var slideshow = document.getElementById('slideshow');
//     if (slideshow.className == 'hidden')
//         slideshow.className = 'shown';
//     console.log(slideshow);
//     for (var i = 0; i < PHOTOS.length; ++i) {
//         console.log(PHOTOS[i]);
//         slideshow.appendChild("")
//     }
// }
//
// function hideGallery() {
//     var slideshow = document.getElementById('slideshow');
//     if (slideshow.className == 'hidden')
//         slideshow.className = 'shown';
// }
