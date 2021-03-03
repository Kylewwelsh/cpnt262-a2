'use strict';

import {images} from './imageArrays.js';

const nav = document.querySelector("nav");
const navButton = document.querySelector(".navButton");
const xIcon = document.querySelector(".xIcon");
const hamIcon = document.querySelector(".hamIcon");

navButton.addEventListener("click", toggleMenu);

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
};

const navOptions = document.querySelectorAll(".navOptions")

navOptions.forEach(
  function (navOptions) {
    navOptions.addEventListener("click", toggleMenu);
  }
);

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
  figcaption.innerHTML = `${image.description} <br><br> Photo Credit: `;
  figure.appendChild(figcaption);

  const photoCredit = document.createElement('a');
  photoCredit.classList.add('photoCredit');
  photoCredit.href = image.creditURL;
  photoCredit.target = 'blank';
  photoCredit.innerHTML = image.credit;
  figcaption.appendChild(photoCredit);

});