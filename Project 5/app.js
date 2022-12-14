const colors = [
  "linear-gradient(90deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)", //g
  "linear-gradient(to top, #c71d6f 0%, #d09693 100%)",
  "linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)",
  "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
  "linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)",
  "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
];
const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");

const board = document.querySelector("#board");
let time = 0;
let score = 0;
startBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("time-btn")) {
    time = parseInt(evt.target.getAttribute("data-time"));
    console.log;
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("circle")) {
    score++;
    evt.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}
function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}
function finishGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  setColor(circle);
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.background = color;
  // el.style.boxShadow = `0 0 10px`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function winTheGame() {
  function clickClick() {
    const circle = document.querySelector(".circle");
    if (circle) {
      circle.click();
    }
  }

  setInterval(clickClick, 33);
}
