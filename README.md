# CPNT262-A2

Repo Author, Owner & Maintainer: <em>Kyle Welsh</em>

### [GitHub Repo](https://github.com/Kylewwelsh/cpnt262-a2)

### [GitHub Pages](https://kylewwelsh.github.io/cpnt262-a2/)

> ## Attributes:

> ## March 02, 2021:
- Repo created on GitHub
- Noticed that I accidentally gave CPNT260 Assignment 1 repo the cpnt262-a2 so had to change that
- I have decided to use my CPNT260 gallery for this assignment, <strong><em><u>but</u></em></strong> because my CPNT260-A3 was part of a multi page gallery, I am just going to copy over the code for ease of access for Tony
- Directory set up; css, js, html files created
- Doctype added to html, strict mode added to js
- To get in better habits for the group project I will be practicing committing my code more often with this
- css and html from cpnt260-a3 copied over, left the css for the other pages from cpnt260 out of the copy and paste
- media queries and hover declarations that were in the original gallery have been taken out
- figures and figcaptions have been taken out of the html, div tag for the old gallery changed to a main tag
- going to start with updating the nav from the old assignment
- The secondary nav that was in the old assignment has been taken out, unneeded classes taken out, font awesome script added, link for browser tab icon added
- css started for the new nav, new nav will just end up being a hamburger menu
- Social icons had to be given a color of black (usually this is redundant) as the default color for them was the default for a link
- tab icon svg opacity changed to 1 so color would come out
- images added to the directory (forgot to mention that in the commit, whoops)
- just realized it was stupid to style the i icons when I can just make all the links black
- a "socials" class added to the ul for the social media icons just in case I need to style the ul's separately
- inline added to socials, padding added to li's, bullet points taken out of the ul's
- banner added, footer height changed from px to rem to match banner, hamburger icon added
- button added and styled for hamburger menu, menu options and socials given 2rem font size
- border and outline taken off button, (might put the outline back on so it looks pressed but will decide later)
- background color added to menu options, nav set to 100vh height and 25rem width, margin-top set to 0 to for nav-options to connect nav to banner
- color and background color added to button on hover
- 'x' icon added to button, set to display none
- nav now set to display none, footer given absolute position with bottom: 0, header commented out for now
- class added to the hamburger icon to separate it from the x icon in the button, styles added to:
  - display x icon
  - hide hamburger icon
  - display nav options
- Hamburger menu completed, played around with it in this [codepen](https://codepen.io/kylewwelsh/full/yLVEYOK) to learn the information from DEV
- Links given an href of # (except socials)
- Paw SVG added to banner, background color added to button to overlap Paw SVG
- Paw SVG added to footer
- Just remembered why I had the opacity so low on the paw svg, so you can see icons and text on the header and footer, reverted the opacity on the svg
- removed css that is from the old assignment so it is not needed (both in main and fonts)
- fixed the js so that when a menu option is clicked the menu closes
- Paw SVG added to the nav popout
- starting image gallery in js file
- const made for images, first image done
- next 2 image array's added, bed time.
>## March 03, 2021:
- Realized I had the wrong date on my readme so I fixed it
- Added const for the gallery called "galleryContainer"
- forEach created for the images
- .createElement used to create a figure element, appendChild used to put the figure element inside the gallery
- p element created the same as above, classList.add used to add a class of "imageTitle to the p for styling purposes
- figcaption element added, no class given
- a element created for the third party website link, class added as "imageLink"
- a element added for photo credit link, "photoCredit" class name given
- `${images.desctiption} Photo Credit:` added to figcaption to produce desired text output
- issues with the photos showing up, checking the code
- first mistake found, appendChild was used to nest the figcaption in the gallery, now switched to nest in the figure element
- main issue found, const were created for all the attributes but not for an actual image, fixing now
- img const created, appendChild used to nest the image inside the image link, the src/alt/width/height were all added
- Final issue fixed, the const for the image link needed to be above the img const
- p element being used for the title has had the appendChild changed from being in the gallery to being in the figure element
- target = 'blank' added to the imageLink and photoCredit to open a new tab for the link instead of leaving the page
- The link for the photo credit was broken, had to fix
- java script is getting pretty long, might put all the arrays into a separate file and do a import/export
- images array put into a separate js file, exported and then imported into the main script file
- footer adjusted for all the images, changed from position absolute to position relative
- The rest of the images were just a copy and paste and the id's were changed. Now changing all the other information
- had to add a space after Photo Credit: in the innerHtml
- Something is coming back undefined, need to figure out why
- I spelled description wrong for the innerHtml, problem fixed and a break has been added between the description and photo credit
- All the image titles, captions and photo credits updated for all the photos
- css style for the photo titles, figcaptions and photo credits added
- css for gallery turned into flexbox
- css declaration created for the figure elements, a width is site wider than the photo to account for long text and keep the images aligned properly