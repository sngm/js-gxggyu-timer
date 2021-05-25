// Import stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Some variables
let rounds = 2;
let roundsDone = 0;
let timerFirst = 6;
let timerSecond = 3;
let timerFirstCopy = timerFirst;
let timerSecondCopy = timerSecond;
let startbutton = document.getElementById('startBtn');
let startroundsbutton = document.getElementById('startRoundsBtn');
let soundbutton = document.getElementById('soundBtn');

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
  let timers_interval = setInterval(function() {
    if (timerFirstCopy > 0) {
      timerFirstAction();
    } else {
      // console.log('else');
      // clearInterval(timer_1_interval);
    }
    if (timerFirstCopy === 0 && timerSecondCopy > 0) {
      timerSecondAction();
    } else {
      // console.log('else 2');
    }
    if (timerFirstCopy === 0 && timerSecondCopy === 0) {
      clearInterval(timers_interval);
      console.log('Interval Timers gecleart');
      setTimerFirstCopy();
      setTimerSecondCopy();
    }
  }, 1000);
}

function startRounds() {
  let timeout = (timerFirst + timerSecond) * 1000;
  console.log('RoundsDone: ', roundsDone);
  console.log('Rounds: ', rounds);
  if (roundsDone === 0) {
    console.log('if');
    roundsAction();
    startTimers();
  }
  if (roundsDone != 0 && roundsDone < rounds) {
    console.log('else if');
    setTimeout(function() {
      console.log('Im Timeout drin');
      roundsAction();
      startTimers();
    }, timeout);
  }
  if (roundsDone === rounds) {
    console.log('Fertig');
  }
}

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
