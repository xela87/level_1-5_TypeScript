import moment from 'moment';
const SECONDS_IN_MINUTE = 60;
const btnDown = document.getElementById('button-timer-down');
const btnUp = document.getElementById('button-timer-up');
const btnStart = document.getElementById('timer-start');
const description = document.getElementById('timer-description');
const timer = document.getElementById('clock-face');
let time = Number(timer.innerText);
let timerActive = false;

btnUp.onclick = () => {
  if (!timerActive) {
    time += 1;
    timer.innerText = String(time);
  }
};

btnDown.onclick = () => {
  if (time > 0 && !timerActive) {
    time -= 1;
    timer.innerText = String(time);
  }
};

function startTimer(currentTime: number) {
  timer.innerText = moment.unix(currentTime).format('mm:ss');
  if (currentTime === 0) {
    description.innerText = 'Вкажіть час у хвилинах';
    timer.innerText = `${time}`;
    timerActive = false;
    btnStart.removeAttribute('disabled');
    return;
  }
  setTimeout(() => startTimer(currentTime - 1), 1000);
}

btnStart.onclick = () => {
  if (time > 0) {
    btnStart.setAttribute('disabled', 'disabled');
    description.innerHTML = 'Залишилось';
    startTimer(time * SECONDS_IN_MINUTE);
    timerActive = true;
  }
};
