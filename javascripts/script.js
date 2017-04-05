const DURATION = 1;
const INTERVAL = 5;
const DEFAULT_EASE = Power4.easeIn;
const EXTRA_EASE = Bounce.easeOut;

function permutations(array) {
    var newArray = [];
    var size = array.length;
    while(size > 0) {
        var i = Math.floor(Math.random() * size);
        newArray.push(array[i]);
        array[i] = array[size - 1];
        --size;
    }
    return newArray;
}

function daniel() {
    var body = jQuery("body");
    var menu = jQuery(".menu_header, .menu_item");
    TweenMax.staggerTo(menu, DURATION, {left: "-100%", ease: DEFAULT_EASE}, DURATION / 2);
    setTimeout(function() {
        menu.remove();
    }, 1000 * 1.5 * DURATION);
    setTimeout(function() {
        var permPhotos = permutations(DANIEL_PHOTOS);
        var photo = jQuery("<img/>", {class: "photo", src: permPhotos[0], style: "opacity: 0;"});
        photo.appendTo(body);
        TweenMax.to(photo, DURATION, {opacity: 1});
        var i = 1;
        setInterval(function() {
            var oldPhoto = jQuery(".photo");
            TweenMax.to(oldPhoto, DURATION, {left: "-100%"}, DURATION);
            setTimeout(function() {
                oldPhoto.remove();
            }, 1000 * 2 * DURATION);
            var photo = jQuery("<img/>", {class: "photo", src: permPhotos[i]});
            photo.appendTo(body);
            TweenMax.from(photo, DURATION, {left: "100%"}, DURATION);
            ++i;
            i %= permPhotos.length;
        }, 1000 * INTERVAL);
    }, 1000 * 1.5 * DURATION);
}

function init() {
    var body = jQuery("body");
    jQuery("<div/>", {
        class: "menu_header",
        text: "TARANTA..."
    }).appendTo(body);
    for(var i in ITEMS) {
        var item = jQuery("<div/>", {
            class: "menu_item",
            style: "top: 100%",
            html: ITEMS[i].html,
            onclick: ITEMS[i].onclick
        });
        item.appendTo(body);
        TweenMax.to(item, DURATION, {ease: EXTRA_EASE, top: ITEMS[i].top});
    }
}
