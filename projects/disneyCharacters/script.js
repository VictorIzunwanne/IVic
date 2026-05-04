"use strict";

// NAVIGATION

// Declaring navigation buttons
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// Declaring the container elements
let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.style.transition = "gap 0.25s";
two.style.transition = "gap 0.25s";
one.parentElement.style.transition = "gap 0.25s";

// Scrolling the respective containers to view
prev.addEventListener("click", () => {
  one.style.gap = "2.5rem";
  two.style.gap = "2.5rem";
  one.parentElement.style.gap = "2.5rem";

  setTimeout(() => {
    one.scrollIntoView({
      behavior: "smooth",
    });

    one.style.gap = "2rem";
    two.style.gap = "2rem";
    one.parentElement.style.gap = "2rem";
  }, 500);
});

next.addEventListener("click", () => {
  one.style.gap = "2.5rem";
  two.style.gap = "2.5rem";
  one.parentElement.style.gap = "2.5rem";

  setTimeout(() => {
    two.scrollIntoView({
      behavior: "smooth",
    });

    one.style.gap = "2rem";
    two.style.gap = "2rem";
    one.parentElement.style.gap = "2rem";
  }, 500);
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
    let parent = i.parentElement.parentElement;
    let parentPos = parent.getBoundingClientRect();
    let conts = document.querySelectorAll(".cont");

    conts.forEach((con) => {
      con.style.transition = "all 0.5s";
      con.style.opacity = 0;

      parent.parentElement.style.opacity = 1;
    });

    let img = parent.querySelector(".char-img");
    let imgPos = img.getBoundingClientRect();
    let child = img.querySelector("img");

    img.style.position = "fixed";
    img.style.transition = "all 0.5s";
    img.style.left = imgPos.left + "px";
    img.style.top = imgPos.top + "px";

    setTimeout(() => {
      img.style.left = "18rem";
      img.style.top = "5rem";

      child.style.transition = "all 0.5s";
      child.style.blockSize = "25rem";
    }, 10);

    i.parentElement.style.transition = "all 0.5s";

    setTimeout(() => {
      i.parentElement.style.blockSize = "100%";

      if (parent.parentElement.parentElement.classList.contains("two")) {
        i.parentElement.style.paddingLeft = "280px";

        return;
      }

      i.parentElement.style.paddingLeft = "360px";
    }, 300);

    parent.style.position = "fixed";
    parent.style.left = parentPos.left + "px";
    parent.style.top = parentPos.top + "px";
    parent.style.transition = "all 0.5s";

    let socials = document.querySelector(".socials");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    let abtChar = document.createElement("p");
    abtChar.classList.add("abtChar");
    abtChar.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus vel autem! Corporis deserunt aperiam provident facilis rerum tempore soluta rem beatae quis, iusto aliquam quisquam tempora minus, maxime veniam?";
    abtChar.style.inlineSize = "20rem";
    abtChar.style.marginBlockStart = "0.5rem";
    abtChar.style.fontSize = "0.8rem";
    abtChar.style.transition = "all 1.5s";

    socials.classList.add("swipeLeft");
    prev.classList.add("swipeLeft");
    next.classList.add("swipeRight");

    setTimeout(() => {
      i.style.display = "none";
      parent.style.transition = "all 0.5s";
      parent.style.left = "15rem";
      parent.style.top = "12rem";
      parent.style.borderRadius = "10rem";
      parent.style.blockSize = "100vh";
      parent.style.inlineSize = "100vw";
      parent.querySelector(".char-name").style.fontSize = "3.5rem";
      parent.querySelector(".char-name").style.marginBottom = "-0.5rem";

      i.parentElement.appendChild(abtChar);
      abtChar.style.opacity = 0;

      setTimeout(() => {
        abtChar.style.opacity = 1;
      }, 50);
    }, 250);
  });
});
