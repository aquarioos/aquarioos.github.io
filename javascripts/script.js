const TOGGLE_FONT = {
    'font-black': 'font-white',
    'font-white': 'font-black'
};

function appear() {
    var nameSurnameClassName = document.getElementById('name-surname').getAttribute('class');
    document.getElementById('name-surname').setAttribute('class', TOGGLE_FONT[nameSurnameClassName]);

    document.getElementById('bg-image').setAttribute('class', 'bg-image-blurred');
}