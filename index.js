// Imports
import { JstUnit as Unit } from './JstUnit.js';
import { JstActivity as Activity } from './JstActivity.js';
import { JstTimer as Timer } from './JstTimer.js';
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

let myFirstActivity = new Activity('Liegestütz', 'myTimer');
console.log(myFirstActivity);
let mySecondActivity = new Activity('Superman', 'myTimer');
console.log(mySecondActivity);

let myUnit = new Unit('My Unit', [myFirstActivity, mySecondActivity]);
console.log(myUnit);

let myTimer = new Timer('My Timer', 10000, 5000);
console.log(myTimer);

const app = document.getElementById('app');
const appUnit = document.getElementById('unit');
appUnit.innerHTML =
  '<p><strong>Unit</strong></p>' +
  '<p>' +
  myUnit.name +
  '</p>' +
  '<p>' +
  myUnit.activities +
  '</p>';

const appActivities = document.getElementById('activities');
appActivities.innerHTML =
  '<p><strong>Activities</strong></p>' +
  '<p>' +
  myFirstActivity.name +
  '</p>' +
  '<p>' +
  myFirstActivity.timer +
  '</p>' +
  '<p>' +
  mySecondActivity.name +
  '</p>' +
  '<p>' +
  mySecondActivity.timer +
  '</p>';

const appTimer = document.getElementById('timer');
appTimer.innerHTML =
  '<p><strong>Timer</strong></p>' +
  '<p>' +
  myTimer.name +
  '</p>' +
  '<p>' +
  myTimer.timeFirst +
  ' ms</p>' +
  '<p>' +
  myTimer.timeSecond +
  ' ms</p>';

/* const body = document.getElementsByTagName('body')[0];
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
    } else {
      // console.log('else');
    }
    if (timerFirstCopy === 0 && timerSecondCopy > 0) {
      timerSecondAction();
    } else {
      // console.log('else 2');
    }
    if (timerFirstCopy === 0 && timerSecondCopy === 0) {
      clearInterval(timersInterval);
      console.log('Interval Timers gecleart');
      setTimerFirstCopy();
      setTimerSecondCopy();
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
); */
