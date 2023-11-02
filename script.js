// DOM elements
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const millisecondsElement = document.getElementById("milliseconds");
const startStop = document.getElementById("startStop");
const resetBtn = document.getElementById("resetBtn");

let timer;
let running = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

//Function to update the stopWatch display
function updateDisplay() {
    millisecondsElement.textContent = milliseconds.toString().padStart(3,'0');
    secondsElement.textContent = seconds.toString().padStart(2,'0');
    minutesElement.textContent = minutes.toString().padStart(2,'0');
}

// Function to reset the stopWatch
function reset(){
    clearInterval(timer);
    running = false;
    milliseconds=0;
    seconds=0;
    minutes=0;
    updateDisplay();
    startStop.textContent ='Start';
}

// Function to start or stop the stopWatch
function toggleStartStop() {
    if (running) {
        clearInterval(timer);
        startStop.textContent ='Start';

    }else{
        timer = setInterval(() =>{
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >=60) {
                seconds =0;
                minutes++;
            }
            updateDisplay();
         },10);
         startStop.textContent ='Stop';
    }
    running = !running;
}

// Event listeners
startStop.addEventListener('click',toggleStartStop);
resetBtn.addEventListener('click',reset);

//Initialize
updateDisplay();
