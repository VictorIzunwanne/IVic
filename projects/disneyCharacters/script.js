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
  charD.addEventListener("mouseenter", () => {
    readMore.style.blockSize = "1.5rem";
  });

  // hiding the "read more" button when the card is not hovered
  charD.addEventListener("mouseleave", () => {
    readMore.style.blockSize = "0";
  });
});

// CARDS IN VIEW

// On Window Load
// Declaring the main (scroll container)
let main = document.querySelector("main");
let charImgs = document.querySelectorAll(".char-img");

// Selecting the individual cards
window.addEventListener("load", () => {
  charImgs.forEach((cha) => {
    let mainScr = main.scrollLeft;
    let chaRect = cha.getBoundingClientRect().x;

    // Increasing the image size when the cards are in view

    if (chaRect > 100 && chaRect < 1200) {
      cha.style.transform = "scale(1)";
      cha.style.marginBottom = "0";

      return;
    }
    // Reducing the image size when the cards are not in view
    cha.style.transform = "scale(0.8)";
    cha.style.marginBottom = "-2rem";
  });
});

// On Document Scroll X
main.addEventListener("scroll", () => {
  charImgs.forEach((cha) => {
    let mainScr = main.scrollLeft;
    let chaRect = cha.getBoundingClientRect().x;

    // Increasing the image size when it is in view
    if (chaRect > 100 && chaRect < 1000) {
      cha.style.transform = "scale(1)";
      cha.style.marginBottom = "0";

      return;
    }
    // Reducing the image size when it is not in view
    cha.style.transform = "scale(0.8)";
    cha.style.marginBottom = "-2rem";
  });
});

// SHOWING CHARACTER DETAILS

// Declaring the "read more buttons"
let mores = document.querySelectorAll(".more");

mores.forEach((i) => {
  i.addEventListener("click", () => {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    let parent = i.parentElement.parentElement;

    header.style.blockSize = 0;
    footer.style.blockSize = 0;

    let parentPos = parent.getBoundingClientRect();

    i.style.display = "none";
    parent.style.position = "fixed";
    parent.style.left = parentPos.left + "px";
    parent.style.top = parentPos.top + "px";
    parent.style.transition = "all 0.5s";

    setTimeout(() => {
      parent.style.transition = "all 1s";
      parent.style.left = "10rem";
      parent.style.top = "10rem";
      parent.style.borderRadius = "10rem";
      parent.style.blockSize = "100rem";
      parent.style.inlineSize = "100rem";
    }, 500);
  });
});
