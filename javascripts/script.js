const TOGGLE_FONT = {
    'font-black': 'font-white',
    'font-white': 'font-black'
};

function initialAnimation() {
  // appearElements(['console'], ['bg', 'title'], 1, 2);
  // add shadow
  var initialTimeline = new TimelineLite();
  initialTimeline.add(
    TweenLite.from('#bg-image img', 2,
      {'min-height': '120vh', 'min-width': '120vw', ease: Bounce.easeOut})
  );
  initialTimeline.add(
    TweenLite.to('#bg-image', 0.2, {delay: 0.5, opacity: 0.5, contrast: 0.75})
  );
  // initialTimeline.add(
  //   TweenLite.to(
  //     '#toggle-button', 1,
  //     {opacity: 1}
  //   )
  // );
  initialTimeline.add(
    TweenLite.to('#name-surname', 1, {opacity: 1})
  );

  for (chr of 'Daniel TARANTA') {
    initialTimeline.add(
      TweenLite.delayedCall(
        0.05, addLetter, [document.getElementById('name-surname'), chr]
      )
    );
  }
}

function appearElements(ids, classes, timeout, duration) {
  for (id of ids) {
    console.log(id);
  }
  for (cls of classes) {
    console.log(cls);
  }
}

function addLetter(el, letter) {
  el.textContent += letter;
}
