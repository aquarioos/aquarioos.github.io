var appear = function () {
    let header = document.getElementById("main-header");
    header.style.opacity = "100%";
}

var openItems = function (obj) {
    for (let item of Object.values(obj.children).filter(c => c.classList.contains("items"))) {
        item.style.display = "block";
    }
}

var closeItems = function (obj) {
    for (let item of Object.values(obj.children).filter(c => c.classList.contains("items"))) {
        for (let photo of Object.values(item.children).filter(p => p.classList.contains("photo"))) {
            photo.style.display = "none";
        }
        item.style.display = "none";
    }
}

var toggleSection = function (evt) {
    let parent = evt.parentElement;
    if (parent.classList.contains("opened")) {
        parent.classList.remove("opened");
        closeItems(parent);
        setTimeout(() => parent.style.width = "25%", 400);
    } else {
        parent.classList.add("opened");
        parent.style.width = "50%";
        setTimeout(() => openItems(parent), 400);
    }
}

var main = function () {
    setTimeout(appear, 400);
}