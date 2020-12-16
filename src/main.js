const synth = new Tone.Synth().toMaster();
let octavePitch = 4;
let octaveDisplay = 0;

let octaveCount = document.querySelector('.octave-number');
let octaveUp = document.querySelector('.octave-up');
let octaveDown = document.querySelector('.octave-down');


octaveUp.addEventListener('click', function () {
  console.log(`octave: ${octavePitch}`);
  octavePitch++;
  octaveDisplay++;
  octaveCount.innerHTML = octaveDisplay;
})

octaveDown.addEventListener('click', function () {
  console.log(`octave: ${octavePitch}`);
  octavePitch--;
  octaveDisplay--;
  octaveCount.innerHTML = octaveDisplay;
})


let keys = document.querySelectorAll(".key");
for (const key of keys) {
  key.addEventListener('mousedown', function () {
    let classList = key.classList.value;
    let note = classList.slice(classList.length - 1);
    synth.triggerAttack(`${note}${octavePitch}`, "+0.01", 1);
  })
}
for (const key of keys) {
  key.addEventListener('mouseup', function () {
    let classList = key.classList.value;
    let note = classList.slice(classList.length - 1);
    synth.triggerRelease("0.01");
  })
}

