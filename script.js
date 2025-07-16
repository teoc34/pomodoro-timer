let minutes = 25;
let seconds = 0;
let intervalId;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
  if (isRunning) return; // prevenim dublu start
  isRunning = true;

  intervalId = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(intervalId);
        alert("Gata! Timp pentru pauză 😌");
        isRunning = false;
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
});

function updateDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}
