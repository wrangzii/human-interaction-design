const startCounter = $(".start-counter");
const continueBtn = $(".continue");
const stopBtn = $(".stop");
const pauseBtn = $(".pause");
let clearTime;
let seconds = 0,
  minutes = 0,
  hours = 0;
let secs, mins, gethours;
let TIMER = $("#timer");
const modal = $(".overlay");
const saveBtn = $(".modal-action .save");
const cancelBtn = $(".modal-action .cancel");

function startWatch() {
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  mins = minutes < 10 ? "0" + minutes + ":" : minutes + ":";

  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }

  gethours = hours < 10 ? "0" + hours + ":" : hours + ":";
  secs = seconds < 10 ? "0" + seconds : seconds;

  continueBtn.removeAttribute("hidden");

  TIMER.innerHTML = gethours + mins + secs;
  seconds++;

  clearTime = setTimeout("startWatch()", 1000);
}

startCounter.addEventListener("click", () => {
  startWatch();
  startCounter.setAttribute("hidden", true);
  pauseBtn.style.display = "inline-block";
  stopBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
  clearTimeout(clearTime);
  pauseBtn.style.display = "none";
  continueBtn.style.display = "inline-block";
});

continueBtn.addEventListener("click", () => {
  startWatch();
  continueBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

stopBtn.addEventListener("click", () => {
  modal.style.display = "block";
  saveBtn.onclick = () => {
    resetTimer();
    modal.style.display = "none";
  };

  cancelBtn.onclick = () => {
    modal.style.display = "none";
  }
});

const resetTimer = () => {
  (seconds = 0), (minutes = 0), (hours = 0);
  TIMER.innerHTML = "00:00:00";
  continueBtn.style.display = "none";
  pauseBtn.style.display = "none";
  stopBtn.style.display = "none";
  startCounter.removeAttribute("hidden");
  clearTimeout(clearTime);
};
