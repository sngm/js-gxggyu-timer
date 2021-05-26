// Import stylesheets

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Some variables
let rounds = 20;
let roundsDone = 0;
let timerFirst = 30;
let timerSecond = 20;
let timerFirstCopy = timerFirst;
let timerSecondCopy = timerSecond;
let startbutton = document.getElementById('startBtn');
let startroundsbutton = document.getElementById('startRoundsBtn');
let soundbutton = document.getElementById('soundBtn');

const body = document.getElementsByTagName('body')[0];
body.classList.add('bg-primary');
const headlineDiv = document.getElementById('headline1');
headlineDiv.innerHTML = `<h1>Fitness Timer</h1>`;
const counter1Div = document.getElementById('counter1');
counter1Div.innerHTML =
  `<span>` + `00` + `</span>` + `:` + `<span>` + timerFirst + `</span>`;
const counter2Div = document.getElementById('counter2');
counter2Div.innerHTML =
  `<span>` + `00` + `</span>` + `:` + `<span>` + timerSecond + `</span>`;
const roundsDiv = document.getElementById('rounds');
roundsDiv.innerHTML =
  `<span>` + roundsDone + `</span>` + `/` + `<span>` + rounds + `</span>`;

function setTimerFirstCopy() {
  timerFirstCopy = timerFirst;
  counter1Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timerFirstCopy + `</span>`;
}

function setTimerSecondCopy() {
  timerSecondCopy = timerSecond;
  counter2Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timerSecondCopy + `</span>`;
}

function timerFirstAction() {
  timerFirstCopy = timerFirstCopy - 1;
  counter1Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timerFirstCopy + `</span>`;
}

function timerSecondAction() {
  timerSecondCopy = timerSecondCopy - 1;
  counter2Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timerSecondCopy + `</span>`;
}

function roundsAction() {
  roundsDone = roundsDone + 1;
  roundsDiv.innerHTML =
    `<span>` + roundsDone + `</span>` + `/` + `<span>` + rounds + `</span>`;
}

function startTimers() {
  let timersInterval = setInterval(function() {
    if (timerFirstCopy > 0) {
      timerFirstAction();
      if (timerFirstCopy === 3) {
        body.classList.add('bg-info');
      }
      if (timerFirstCopy === 2) {
        body.classList.add('bg-warning');
        body.classList.remove('bg-info');
      }
      if (timerFirstCopy === 1) {
        body.classList.add('bg-danger');
        body.classList.remove('bg-warning');
      }
      if (timerFirstCopy === 0) {
        body.classList.add('bg-success');
        body.classList.remove('bg-danger');
      }
    } else {
      // console.log('else');
    }
    if (timerFirstCopy === 0 && timerSecondCopy > 0) {
      body.classList.add('bg-primary');
      body.classList.remove('bg-success');
      timerSecondAction();
    } else {
      // console.log('else 2');
    }
    if (timerFirstCopy === 0 && timerSecondCopy === 0) {
      clearInterval(timersInterval);
      console.log('Interval Timers gecleart');
      setTimerFirstCopy();
      setTimerSecondCopy();
      body.classList.add('bg-primary');
    }
  }, 1000);
}

function startRounds() {
  let timeout = (timerFirst + timerSecond) * 1000;

  for (let i = 0; i < rounds; i++) {
    console.log(i);
    setTimeout(function() {
      roundsAction();
      startTimers();
    }, timeout * i);
    if (i === rounds - 1) {
    }
  }
}

// function startRounds() {
//   let timeout = (timerFirst + timerSecond) * 1000;

//   if (roundsDone === 0) {
//     console.log('RoundsDone: ', roundsDone);
//     console.log('Rounds: ', rounds);
//     console.log('if');
//     roundsAction();
//     startTimers();
//   }
//   if (roundsDone != 0 && roundsDone < rounds) {
//     console.log('noch ne Runde');
//     console.log('RoundsDone: ', roundsDone);
//     console.log('Rounds: ', rounds);
//     setTimeout(function() {
//       console.log('Im Timeout drin');
//       roundsAction();
//       startTimers();
//     }, timeout);
//   }
//   if (roundsDone === rounds) {
//     console.log('Fertig');
//   }
// }

startbutton.addEventListener(
  'click',
  function() {
    startTimers();
  },
  false
);

startroundsbutton.addEventListener(
  'click',
  function() {
    startRounds();
  },
  false
);

// Add Audio to the show
// let x = document.getElementById('timerAudio');

// function playAudio() {
//   x.play();
// }

// soundbutton.addEventListener(
//   'click',
//   function() {
//     playAudio();
//   },
//   false
// );
