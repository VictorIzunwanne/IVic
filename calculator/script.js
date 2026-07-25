"use strict";

const cont = document.querySelector(".cont");
const display = document.querySelector(".pri-display");
// let content;

const btns = document.querySelectorAll("button");

btns.forEach((i) => {
  i.addEventListener("click", () => {
    pressKey(i);
    press(i);
  });
});

function press(i) {
  let content = display.innerHTML;

  if (content.length > 8) {
    return;
  }

  switch (i.innerHTML) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      let b = i.innerHTML;

      display.innerHTML = content + b;
      break;

    case ".":
      findButton(".");
      break;

    default:
    // console.log(i.innerHTML);
  }
}

function pressKey(btn) {
  btn.style.filter = "none";

  setTimeout(() => {
    btn.style.filter = "drop-shadow(1px 1px 1px var(--black))";
  }, 100);
}

const alphaBtns = [
  document.querySelector(".esc"),
  document.querySelector(".ac"),
  document.querySelector(".equalTo"),
  document.querySelector(".point"),
];

alphaBtns.forEach((a) => {
  a.addEventListener("click", () => {
    if (a === alphaBtns[0]) {
      del();
    } else if (a === alphaBtns[1]) {
      clear();
    } else if (a === alphaBtns[2]) {
      equalTo();
    } else if (a === alphaBtns[3]) {
      findButton(".");
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    equalTo();

    btns.forEach((b) => {
      if (b.innerHTML === "=") {
        pressKey(b);
      }
    });
  } else if (e.code === "Backspace") {
    del();

    pressBtn("del", true);
  } else if (e.code === "Escape") {
    clear();

    pressBtn("AC", true);
  }

  // console.log(e.code);
  findButton(e.code);
});

function findButton(e) {
  if (e.includes("D") && e.at(0)[0] === "D") {
    pressBtn(e.at(-1));
  } else if (e === "." && !display.innerHTML.split("").includes(".")) {
    btns.forEach((b) => {
      if (b.innerHTML === e) {
        pressKey(b);

        if (display.innerHTML === "") {
          display.innerHTML = "0";

          return;
        }
      }
    });

    let content = display.innerHTML;
    display.innerHTML = content + e;
  } else if (e === "Period") {
    if (!display.innerHTML.split("").includes(".")) {
      if (display.innerHTML === "") {
        display.innerHTML = "0.";

        return;
      }

      console.log(display.innerHTML);

      let content = display.innerHTML;
      display.innerHTML = content + ".";
    }
    btns.forEach((b) => {
      if (b.innerHTML === ".") {
        pressKey(b);
      }
    });
  }
}

function pressBtn(btn, ask) {
  if (ask) {
    btns.forEach((b) => {
      if (b.innerHTML === btn) {
        pressKey(b);
      }
    });

    return;
  }

  btns.forEach((b) => {
    if (b.innerHTML === btn) {
      pressKey(b);
      press(b);
    }
  });
}

function equalTo() {
  calculate();
}

function del() {
  let value = display.innerHTML;
  let num = value.split("");

  let newNum = num.slice(0, -1);

  display.innerHTML = newNum.join("");
}

function calculate() {
  console.log("Calculated");
}

function clear() {
  display.innerHTML = "";
}
