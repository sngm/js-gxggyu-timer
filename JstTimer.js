let timerFirstCopy = '';
let timerSecondCopy = '';

class JstTimer {
  constructor(name, timeFirst, timeSecond) {
    this.name = name;
    // Time in ms
    this.timeFirst = timeFirst;
    this.timeSecond = timeSecond;
  }

  /*   _setTimerFirstCopy() {
    timerFirstCopy = this.timeFirst;
    counter1Div.innerHTML =
      `<span>` + `00` + `</span>` + `:` + `<span>` + timerFirstCopy + `</span>`;
  }
  _setTimerSecondCopy() {
    timerSecondCopy = this.timeSecond;
    counter2Div.innerHTML =
      `<span>` +
      `00` +
      `</span>` +
      `:` +
      `<span>` +
      timerSecondCopy +
      `</span>`;
  }

  _timerFirstAction() {
    timerFirstCopy = timerFirstCopy - 1;
    counter1Div.innerHTML =
      `<span>` + `00` + `</span>` + `:` + `<span>` + timerFirstCopy + `</span>`;
  }
  _timerSecondAction() {
    timerSecondCopy = timerSecondCopy - 1;
    counter2Div.innerHTML =
      `<span>` +
      `00` +
      `</span>` +
      `:` +
      `<span>` +
      timerSecondCopy +
      `</span>`;
  }

  // TODO: Timer Start Methode einbauen
  start() {
    this._setTimerFirstCopy();
    this._setTimerSecondCopy();
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
  } */
}

export { JstTimer };
