'use strict';
// import for the object arrays to create gallery
import {images} from './imageArrays.js';

// hamburger menu
const nav = document.querySelector("nav"); //slide menu
const navButton = document.querySelector(".navButton"); // button behind hamburger and x icons
const xIcon = document.querySelector(".xIcon"); // x icon when menu is open
const hamIcon = document.querySelector(".hamIcon"); //hamburger icon

// function to control the menu
navButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (nav.classList.contains("showNav")) {
    nav.classList.remove("showNav"); // hide menu
    xIcon.style.display = "none"; // when menu is hidden x icon is not displayed
    hamIcon.style.display = "block"; // when menu is hidden hamburger icon is displayed
  } else {
    nav.classList.add("showNav"); // takes the click event on hamburger icon and shows nav menu
    xIcon.style.display = "block"; // unhides x icon
    hamIcon.style.display = "none"; // hides hamburger icon
  }
};

const navOptions = document.querySelectorAll(".navOptions");
// used to close the menu when a link option is clicked
navOptions.forEach(
  function (navOptions) {
    navOptions.addEventListener("click", toggleMenu);
  }
  
); // end of function to control the menu

// selects the gallery in the html main tag
const galleryContainer = document.querySelector('.gallery');

// function to begin creating elements and adding to the html
images.forEach( function(image){

  // create figure element and stick it in the gallery
  const figure = document.createElement('figure');
  galleryContainer.appendChild(figure);
  
  // create 'a' element and place it in the figure element
  const imageLink = document.createElement('a');
  // adding class to style seperately than the other a tags in the HTML
  imageLink.classList.add('imageLink');
  // link used for the photo
  imageLink.href = image.linkURL;
  // target blank used to open new tab instead of taking user away from my site
  imageLink.target = 'blank';
  figure.appendChild(imageLink);

  //creating the image element that will be placed within the links that were created in the figure element
  const galleryImage = document.createElement('img');
  // pulls the file path from the array
  galleryImage.src = image.pathURL;
  //pulls the desciption string from the array
  galleryImage.alt = image.description;
  // width and height numbers pulled from array
  galleryImage.width = image.width;
  galleryImage.height = image.height;
  //image placed in link, not in gallery
  imageLink.appendChild(galleryImage);

  //creates the title for each photo
  const imageTitle = document.createElement('p');
  // class added just in case any p text needs to be added later, keep styling separate
  imageTitle.classList.add('imageTitle');
  // pulls the image title and puts it into the html
  imageTitle.innerHTML = image.title;
  // p element put into the figure tag
  figure.appendChild(imageTitle);

  // fig caption created for image descirption
  const figcaption = document.createElement('figcaption');
  //innerHTML puts the text in the document, "`${image.description}` pulls the string from the array, breaks added to seperate photo credit from description for cleaner look"
  figcaption.innerHTML = `${image.description} <br><br> Photo Credit: `;
  //figcaption placed in figure tag
  figure.appendChild(figcaption);

  // link created for the photo credit
  const photoCredit = document.createElement('a');
  //classed so it can be styled differently to the other links
  photoCredit.classList.add('photoCredit');
  //pulls the credit url from the array and puts it into the href
  photoCredit.href = image.creditURL;
  // opens link in a new tab to avoide user leaving site
  photoCredit.target = 'blank';
  // places the credit in the html
  photoCredit.innerHTML = image.credit;
  //placed in figcaption last and is the end of the figure
  figcaption.appendChild(photoCredit);
});