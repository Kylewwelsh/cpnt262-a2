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


// const images = [
//   {
//     id: 0,
//     title: "Superman Jump!",
//     description: "Cooper jumping onto the deck.",
//     width: 250,
//     height: 350,
//     pathURL: './assets/images/gallery/00.jpg',
//     linkURL: 'https://en.wikipedia.org/wiki/Norwegian_Buhund',
//     credit: "Kyle Welsh",
//     creditURL: 'https://kylewwelsh.github.io/cpnt260-a4/',
//   },

//   {
//     id: 1,
//     title: "Little ball of tired",
//     description: "Cooper curled up in a ball sleeping.",
//     width: 250,
//     height: 350,
//     pathURL: './assets/images/gallery/01.jpg',
//     linkURL: 'https://en.wikipedia.org/wiki/Norwegian_Buhund',
//     credit: "Kyle Welsh",
//     creditURL: 'https://kylewwelsh.github.io/cpnt260-a4/',
//   },

//     {
//     id: 2,
//     title: "Lazy sunday cuddles!",
//     description: "Cooper and Kyle cuddled up in ben on a Sunday.",
//     width: 250,
//     height: 350,
//     pathURL: './assets/images/gallery/02.jpg',
//     linkURL: 'https://en.wikipedia.org/wiki/Norwegian_Buhund',
//     credit: "Kyle Welsh",
//     creditURL: 'https://kylewwelsh.github.io/cpnt260-a4/',
//   },
// ];

import {images} from './imageArrays.js';

const galleryContainer = document.querySelector('.gallery');

images.forEach( function(image){

  const figure = document.createElement('figure');
  galleryContainer.appendChild(figure);
  
  const imageLink = document.createElement('a');
  imageLink.classList.add('imageLink');
  imageLink.href = image.linkURL;
  imageLink.target = 'blank';
  figure.appendChild(imageLink);

  const galleryImage = document.createElement('img');
  galleryImage.src = image.pathURL;
  galleryImage.alt = image.description;
  galleryImage.width = image.width;
  galleryImage.height = image.height;
  imageLink.appendChild(galleryImage);

  const imageTitle = document.createElement('p');
  imageTitle.classList.add('imageTitle');
  imageTitle.innerHTML = image.title;
  figure.appendChild(imageTitle);

  const figcaption = document.createElement('figcaption');
  figcaption.innerHTML = `${image.desctiption} Photo Credit:`;
  figure.appendChild(figcaption);

  const photoCredit = document.createElement('a');
  photoCredit.classList.add('photoCredit');
  photoCredit.href = image.creditURL;
  photoCredit.target = 'blank';
  photoCredit.innerHTML = image.credit;
  figcaption.appendChild(photoCredit);

});