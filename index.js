// Import stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Some variables
let timer_1 = 12;
let timer_2 = 10;
let startbutton = document.getElementById('startBtn');

// Write Javascript code!
const headlineDiv = document.getElementById('headline1');
headlineDiv.innerHTML = `<h1>Fitness Timer</h1>`;
const counter1Div = document.getElementById('counter1');
counter1Div.innerHTML =
  `<span>` + `00` + `</span>` + `:` + `<span>` + timer_1 + `</span>`;
const counter2Div = document.getElementById('counter2');
counter2Div.innerHTML =
  `<span>` + `00` + `</span>` + `:` + `<span>` + timer_2 + `</span>`;
// const counterActionsDiv = document.getElementById('counterActions');
// counterActionsDiv.innerHTML = `<button onclick="myTimer()">start</button>`;

function timer_1_action() {
  timer_1 = timer_1 - 1;
  counter1Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timer_1 + `</span>`;
}

function timer_2_action() {
  timer_2 = timer_2 - 1;
  counter2Div.innerHTML =
    `<span>` + `00` + `</span>` + `:` + `<span>` + timer_2 + `</span>`;
}

function start_timers() {
  let timers_interval = setInterval(function() {
    if (timer_1 > 0) {
      timer_1_action();
      console.log(timer_1);
    } else {
      console.log('else');
      // clearInterval(timer_1_interval);
    }
    if (timer_1 === 0 && timer_2 > 0) {
      timer_2_action();
    } else {
      console.log('else 2');
    }
    if (timer_1 === 0 && timer_2 === 0) {
      clearInterval(timers_interval);
      console.log('Interval Timers gecleart');
    }
  }, 1000);
}

startbutton.addEventListener(
  'click',
  function() {
    start_timers();
  },
  false
);
