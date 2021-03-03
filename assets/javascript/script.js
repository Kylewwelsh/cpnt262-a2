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

const navOptions = document.querySelectorAll(".navOptions")

navOptions.forEach(
  function (navOptions) {
    navOptions.addEventListener("click", toggleMenu)
  }
)


const images = [
  {
    id: 0,
    title: "Superman Jump!",
    description: "Cooper jumping onto the deck.",
    width: 250,
    height: 350,
    pathURL: './assets/images/gallery/00.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Norwegian_Buhund',
    credit: "Kyle Welsh",
    creditURL: 'https://www.kylewwelsh.github.io/cpnt260-a4/',
  },

  {
    id: 1,
    title: "Little ball of tired",
    description: "Cooper curled up in a ball sleeping.",
    width: 250,
    height: 350,
    pathURL: './assets/images/gallery/01.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Norwegian_Buhund',
    credit: "Kyle Welsh",
    creditURL: 'https://www.kylewwelsh.github.io/cpnt260-a4/',
  },

    {
    id: 2,
    title: "Lazy sunday cuddles!",
    description: "Cooper and Kyle cuddled up in ben on a Sunday.",
    width: 250,
    height: 350,
    pathURL: './assets/images/gallery/02.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Norwegian_Buhund',
    credit: "Kyle Welsh",
    creditURL: 'https://www.kylewwelsh.github.io/cpnt260-a4/',
  },
];

const galleryContainer = document.querySelector('.gallery');

images.forEach( function(images){
  const figure = document.createElement('figure');
  galleryContainer.appendChild(figure);

  const title = document.createElement('p');
  title.classList.add('imageTitle');
  title.innerHTML = images.title;
  galleryContainer.appendChild(imageTitle);

  const figcaption = document.createElement('figcaption');
  title.innerHTML = image.description;
  galleryContainer.appendChild(figurecaption);

  