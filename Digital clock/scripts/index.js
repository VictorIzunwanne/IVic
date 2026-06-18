"use strict";

const date = document.querySelector(".date");
let tDate = new Date();
date.innerHTML = tDate.toDateString();

const sec1 = document.querySelector(".sec-1");
const sec2 = document.querySelector(".sec-2");
const min1 = document.querySelector(".min-1");
const min2 = document.querySelector(".min-2");
const hour1 = document.querySelector(".hour-1");
const hour2 = document.querySelector(".hour-2");

const colon = document.querySelectorAll(".blinking-column");
const btn = document.querySelector(".timer");
let timer;
let endSpeed = true;

const speed = document.querySelector(".value");
let value = +speed.innerHTML;

const decre = document.querySelector(".decrement");
const incre = document.querySelector(".increment");

const message = document.querySelector(".message");

btn.addEventListener("click", () => {
  decide();
  indicate();
});

decre.addEventListener("click", () => {
  slowDown();
  indicate();
});

incre.addEventListener("click", () => {
  speedUp();
  indicate();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    decide();
    indicate();
  } else if (e.code === "Escape") {
    reset();
    indicate();
  } else if (e.code === "ArrowUp") {
    speedUp();
    indicate();
  } else if (e.code === "ArrowDown") {
    slowDown();
    indicate();
  }
});

function decide() {
  switch (btn.innerHTML) {
    case "START":
      start();
      break;

    case "RESET":
      reset();
      break;

    case "PAUSE":
      pause();
      break;

    default:
      message.innerHTML = "The timer is broken";
  }
}

function start() {
  message.innerHTML = "The timer has started";

  runSec();
  endSpeed = false;

  btn.innerHTML = "PAUSE";
}

function pause(e) {
  if (e) {
    message.innerHTML = "The timer has reached it's end";

    stopSec();

    btn.innerHTML = "RESET";

    return;
  }

  message.innerHTML = "The timer is paused";

  stopSec();

  btn.innerHTML = "START";
}

function reset() {
  message.innerHTML = "The timer has been reset";

  stopSec();

  sec1.innerHTML = 0;
  sec2.innerHTML = 0;
  min1.innerHTML = 0;
  min2.innerHTML = 0;
  hour1.innerHTML = 0;
  hour2.innerHTML = 0;

  btn.innerHTML = "START";
  speed.innerHTML = 1000;
  value = 1000;
}

function runSec() {
  colon.forEach((c) => {
    c.style.animation = "blink 1s infinite";
  });

  timer = setInterval(() => {
    count();
  }, value);
}

function getValue() {
  return value;
}

function stopSec() {
  colon.forEach((c) => {
    c.style.animation = "none";
  });

  clearInterval(timer);
}

function count() {
  let one = +sec2.innerHTML;

  if (one > 8) {
    sec2.innerHTML = 0;

    tenSec();

    return;
  }
  sec2.innerHTML = one + 1;

  end();
}

function tenSec() {
  let one = +sec1.innerHTML;

  if (one > 4) {
    sec1.innerHTML = 0;

    runMin();

    return;
  }
  sec1.innerHTML = one + 1;
}

function runMin() {
  let one = +min2.innerHTML;

  if (one > 8) {
    min2.innerHTML = 0;

    tenMin();
    return;
  }

  min2.innerHTML = one + 1;
}

function tenMin() {
  let one = +min1.innerHTML;

  if (one > 4) {
    min1.innerHTML = 0;

    runHour();
    return;
  }

  min1.innerHTML = one + 1;
}

function runHour() {
  let one = +hour2.innerHTML;

  if (one > 8) {
    hour2.innerHTML = 0;

    tenHour();
    return;
  }

  hour2.innerHTML = one + 1;
}

function tenHour() {
  let one = +hour1.innerHTML;

  hour1.innerHTML = one + 1;
}

function end() {
  let one = +sec1.innerHTML;
  let three = +min1.innerHTML;
  let five = +hour1.innerHTML;

  let two = +sec2.innerHTML;
  let four = +min2.innerHTML;
  let six = +hour2.innerHTML;

  if (
    one === 5 &&
    two === 9 &&
    three === 5 &&
    four === 9 &&
    five === 5 &&
    six === 9
  ) {
    pause(true);
    endSpeed = true;
  }
}

function hold() {
  stopSec();
}

function speedUp() {
  if (endSpeed || btn.innerHTML === "START") {
    message.innerHTML = "Start the timer to change clock speed";

    return;
  }

  if (value === 1) {
    message.innerHTML = "This is the highest speed";
    return;
  }

  speed.innerHTML = value / 10;
  value = value / 10;
  hold();
  runSec();
  message.innerHTML = "The clock has been sped up";
}

function slowDown() {
  if (endSpeed || btn.innerHTML === "START") {
    message.innerHTML = "Start the timer to change clock speed";

    return;
  }

  if (value === 1000) {
    message.innerHTML = "This is the slowest available speed";
    return;
  }

  speed.innerHTML = value * 10;
  value = value * 10;
  hold();
  runSec();
  message.innerHTML = "The clock has been slowed down";
}

function indicate() {
  message.style.border = "1px solid red";
  setTimeout(() => {
    message.style.border = "none";
  }, 1);
}
