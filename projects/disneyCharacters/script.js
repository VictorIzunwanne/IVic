"use strict";

// NAVIGATION

// Declaring navigation buttons
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// Declaring the container elements
let one = document.querySelector(".one");
let two = document.querySelector(".two");

// Scrolling the respective containers to view
prev.addEventListener("click", () => {
  one.scrollIntoView({
    behavior: "smooth",
  });
});

next.addEventListener("click", () => {
  two.scrollIntoView({
    behavior: "smooth",
  });
});

// READ MORE

// Declaring the cards
let charDs = document.querySelectorAll(".char-d");

// Showing the "read more" button when the card is hovered
charDs.forEach((charD) => {
  let readMore = charD.querySelector(".more");
  charD.addEventListener("mouseover", () => {
    readMore.style.blockSize = "1.5rem";
  });

  // hiding the "read more" button when the card is not hovered
  charD.addEventListener("mouseout", () => {
    readMore.style.blockSize = "0";
  });
});

// CARDS IN VIEW

// Declaring the main (scroll container)
let main = document.querySelector("main");
let charImgs = document.querySelectorAll(".char-img");

charImgs.forEach((cha) => {
  let mainScr = main.scrollLeft;
  let chaRect = cha.getBoundingClientRect().x;

  if (chaRect > 100 && chaRect < 1200) {
    cha.style.transform = "scale(1)";
    cha.style.marginBottom = "0";

    return;
  }
  cha.style.transform = "scale(0.8)";
  cha.style.marginBottom = "-2rem";
});

main.addEventListener("scroll", () => {
  charImgs.forEach((cha) => {
    let mainScr = main.scrollLeft;
    let chaRect = cha.getBoundingClientRect().x;

    if (chaRect > 100 && chaRect < 1000) {
      cha.style.transform = "scale(1)";
      cha.style.marginBottom = "0";

      return;
    }
    cha.style.transform = "scale(0.8)";
    cha.style.marginBottom = "-2rem";
  });
});
