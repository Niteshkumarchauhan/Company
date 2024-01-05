let time = 0;
let running = false;
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let intervalId = null;
function start() {
  if (!running) {
    running = true;
    intervalId = setInterval(increment, 10);
  }
}
function stop() {
  running = false;
  clearInterval(intervalId);
}
function reset() {
  running = false;
  clearInterval(intervalId);
  time = 0;
  display.textContent = '00:00';
}
function increment() {
  if (running) {
    time++;
    let seconds = Math.floor(time / 100 % 60);
    let miliseconds = time % 100;
    display.textContent = `${pad(seconds)}:${pad(miliseconds)}`;
  }
}
function pad(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
