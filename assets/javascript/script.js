'use strict';

const nav = document.querySelector("nav")
const navButton = document.querySelector(".navButton")
const xIcon = document.querySelector(".xIcon")
const hamIcon = document.querySelector(".hamIcon")

navButton.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (nav.classList.contains("showNav")) {
    nav.classList.remove("showNav");
    xIcon.style.display = "none";
    hamIcon.style.display = "block";
  } else {
    nav.classList.add("showNav");
    xIcon.style.display = "block";
    hamIcon.style.display = "none";
  }
}

const menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)