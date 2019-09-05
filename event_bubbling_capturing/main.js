// addEventListener(event, function, useCapture);

// true - The event handler is executed in the capturing phase
// false- Default. The event handler is executed in the bubbling phase

const evtBubblingDivs = document.querySelectorAll('.evt-bubbling div');
const evtCapturingDivs = document.querySelectorAll('.evt-capturing div');

function handleClick(e) {
    console.log(this.className);
    e.stopPropagation();
}

function handleBodyClick(e) {
    // alert('Welcome');
    console.log('Welcome');
}

console.log(evtBubblingDivs);
evtBubblingDivs.forEach( (div) => {
    div.addEventListener('click', handleClick, false);
});

console.log(evtCapturingDivs);
evtCapturingDivs.forEach( (div) => {
    div.addEventListener('click', handleClick, true);
});

document.body.addEventListener('click', handleBodyClick, true);