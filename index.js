'use strict';
// Imports
import { JstUnit as Unit } from './JstUnit.js';
import { JstActivity as Activity } from './JstActivity.js';
import { JstTimer as Timer } from './JstTimer.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Some variables
// let rounds = 20;
// let roundsDone = 0;
// let timerFirst = 30;
// let timerSecond = 20;
let timeFirst;
let timeSecond;
// let startroundsbutton = document.getElementById('startRoundsBtn');
// let soundbutton = document.getElementById('soundBtn');

// let myFirstActivity = new Activity('Liegestütz', 'myTimer');
// console.log(myFirstActivity);
// let mySecondActivity = new Activity('Superman', 'myTimer');
// console.log(mySecondActivity);
// let myUnit = new Unit('My Unit', [myFirstActivity, mySecondActivity]);
// console.log(myUnit);
let myTimer = new Timer('My First Timer', 5, 5);
console.log(myTimer);

const app = document.getElementById('app');
// const appUnit = document.getElementById('unit');
// appUnit.innerHTML =
/* '<p><strong>Unit</strong></p>' +
  '<p>' +
  myUnit.name +
  '</p>' +
  '<p>' +
  myUnit.activities +
  '</p>' +
  '<button id="startUnitBtn">Start Unit</button>'; */

// const appActivities = document.getElementById('activities');
// appActivities.innerHTML =
/* '<p><strong>Activities</strong></p>' +
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
  '</p>'; */

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
  ' ms</p>' +
  '<button id="startTimerBtn">Start Timer</button>';

let startTimerBtn = document.getElementById('startTimerBtn');

startTimerBtn.addEventListener(
  'click',
  function() {
    startTimers();
  },
  false
);

// const body = document.getElementsByTagName('body')[0];
// body.classList.add('bg-primary');
// const headlineDiv = document.getElementById('headline1');
// headlineDiv.innerHTML = `<h1>Fitness Timer</h1>`;
const counter1Div = document.getElementById('counter1');
counter1Div.innerHTML =
  `<span>` + `00` + `</span>` + `:` + `<span>` + timeFirst + `</span>`;
const counter2Div = document.getElementById('counter2');
counter2Div.innerHTML =
  `<span>` + `00` + `</span>` + `:` + `<span>` + timeSecond + `</span>`;
// const roundsDiv = document.getElementById('rounds');
// roundsDiv.innerHTML =
// `<span>` + roundsDone + `</span>` + `/` + `<span>` + rounds + `</span>`;

function setTimeFirst() {
  timeFirst = myTimer.timeFirst;
  counter1Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timeFirst + `</span>`;
}

setTimeFirst();

function setTimeSecond() {
  timeSecond = myTimer.timeSecond;
  counter2Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timeSecond + `</span>`;
}

setTimeSecond();

function timeFirstAction() {
  timeFirst = timeFirst - 1;
  counter1Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timeFirst + `</span>`;
}

function timeSecondAction() {
  timeSecond = timeSecond - 1;
  counter2Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timeSecond + `</span>`;
}

function startTimers() {
  let timersInterval = setInterval(function() {
    if (timeFirst > 0) {
      timeFirstAction();
    } else {
      // console.log('else');
    }
    if (timeFirst === 0 && timeSecond > 0) {
      timeSecondAction();
    } else {
      // console.log('else 2');
    }
    if (timeFirst === 0 && timeSecond === 0) {
      clearInterval(timersInterval);
      console.log('Interval Timers gecleart');
      setTimeFirst();
      setTimeSecond();
    }
  }, 1000);
}

/* function roundsAction() {
  roundsDone = roundsDone + 1;
  roundsDiv.innerHTML =
    `<span>` + roundsDone + `</span>` + `/` + `<span>` + rounds + `</span>`;
} */

/* function startRounds() {
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
} */

/* startroundsbutton.addEventListener(
  'click',
  function() {
    startRounds();
  },
  false
); */
