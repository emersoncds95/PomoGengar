const timerDisplay = document.querySelector('#timer');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');
var fundoCronometro = document.querySelector("#topo-cronometro")

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

startBtn.addEventListener('click', function() {
  interval = setInterval(startTimer, 1000);
  startBtn.setAttribute('disabled', true);
  pauseBtn.removeAttribute('disabled');
});

pauseBtn.addEventListener('click', function() {
  clearInterval(interval);
  startBtn.removeAttribute('disabled');
  pauseBtn.setAttribute('disabled', true);
});

resetBtn.addEventListener('click', function() {
  clearInterval(interval);
  timerDisplay.innerHTML = '00:00:00';
  seconds = 0;
  minutes = 0;
  hours = 0;
  startBtn.removeAttribute('disabled');
  pauseBtn.setAttribute('disabled', true);
});

function startTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  if(minutes >= 10){
    fundoCronometro.style.background = "url(../img/bg-hunter.jpg)"
}if(minutes >= 20){
    fundoCronometro.style.background = "url(../img/bg-genkar.jpg)"
}


  timerDisplay.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

function mudarFundoCronometro(){
    
}

