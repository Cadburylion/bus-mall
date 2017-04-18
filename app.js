'use strict';

// image object constructor
function SurveyImage(name, filename) {
  this.name = name;
  this.filename = './img/' + filename;
  this.shownAmount = 0;
  this.clickAmount = 0;
}

// return random images array index
function selectRandomImagesIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var imagesOnSecondPreviousScreen = [];
var imagesOnPreviousScreen = [];
var imagesOnScreen = [];

var images = [
  new SurveyImage('bag', 'bag.jpg'),
  new SurveyImage('banana', 'banana.jpg'),
  new SurveyImage('bathroom', 'bathroom.jpg'),
  new SurveyImage('boots', 'boots.jpg'),
  new SurveyImage('breakfast', 'breakfast.jpg'),
  new SurveyImage('bubblegum', 'bubblegum.jpg'),
  new SurveyImage('chair', 'chair.jpg'),
  new SurveyImage('cthulhu', 'cthulhu.jpg'),
  new SurveyImage('dog-duck', 'dog-duck.jpg'),
  new SurveyImage('dragon', 'dragon.jpg'),
  new SurveyImage('pen', 'pen.jpg'),
  new SurveyImage('pet-sweep', 'pet-sweep.jpg'),
  new SurveyImage('scissors', 'scissors.jpg'),
  new SurveyImage('shark', 'shark.jpg'),
  new SurveyImage('sweep', 'sweep.png'),
  new SurveyImage('tauntaun', 'tauntaun.jpg'),
  new SurveyImage('unicorn', 'unicorn.jpg'),
  new SurveyImage('usb-tentacle', 'usb.gif'),
  new SurveyImage('water-can', 'water-can.jpg'),
  new SurveyImage('wine-glass', 'wine-glass.jpg'),
];


function selectThreeRandomImages(){

  images = images.concat(imagesOnSecondPreviousScreen);
  imagesOnSecondPreviousScreen = imagesOnPreviousScreen;
  imagesOnPreviousScreen = imagesOnScreen;

  // clears out imagesOnScreen
  imagesOnScreen = [];
  // create a var nextPhoto to keep track of the next Photo we take out of images
  // splice out a photo object (which removes it from images)
  var nextImage = images.splice(selectRandomImagesIndex(images), 1);
  // concat the array returned by splice onto imagesOnScreen
  imagesOnScreen = imagesOnScreen.concat(nextImage);
  // repeat two more times to get three images
  nextImage = images.splice(selectRandomImagesIndex(images), 1);
  imagesOnScreen = imagesOnScreen.concat(nextImage);
  nextImage = images.splice(selectRandomImagesIndex(images), 1);
  imagesOnScreen = imagesOnScreen.concat(nextImage);


  imagesOnPreviousScreen.concat(imagesOnScreen);
  return imagesOnScreen;
}

// assign variables to DOM id's
var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');

// add event listeners to DOM id's that invoke displayThreeImages when user clicks any image

firstImage.addEventListener('click', displayThreeImages);
secondImage.addEventListener('click', displayThreeImages);
thirdImage.addEventListener('click', displayThreeImages);





// show images in imagesOnScreen on index page

function displayThreeImages(event){
console.log(event.target);

  selectThreeRandomImages();


  firstImage.src = imagesOnScreen[0].filename;
  imagesOnScreen[0].shownAmount++;
  // for (imagesOnScreen[0] in imagesOnScreen){
  //   imagesOnScreen[0].onclick = function(){
  //     imagesOnScreen[0].clickAmount++;
  //   };
  // }
  secondImage.src = imagesOnScreen[1].filename;
  imagesOnScreen[1].shownAmount++;
  thirdImage.src = imagesOnScreen[2].filename;
  imagesOnScreen[2].shownAmount++;

}


//populate page with three random images on page load
selectThreeRandomImages();
firstImage.src = imagesOnScreen[0].filename;
imagesOnScreen[0].shownAmount++;
secondImage.src = imagesOnScreen[1].filename;
imagesOnScreen[1].shownAmount++;
thirdImage.src = imagesOnScreen[2].filename;
imagesOnScreen[2].shownAmount++;



// function displayImages(event){
//
//
//
//
//   var countFirst = products[selectFromImages()];
//   picSection1.src = countFirst.src;
//   countFirst.shownAmount++;
//   console.log(countFirst);
//
//   var countSecond = products[selectFromImages()];
//   picSection2.src = countSecond.src;
//   countSecond.shownAmount++;
//   console.log(countSecond);
//
//   var countThird = products[selectFromImages()];
//   picSection3.src = countThird.src;
//   countThird.shownAmount++;
//   console.log(countThird);
// }
//
//
//
// var picSection1 = document.getElementById('image1');
// picSection1.addEventListener('click', displayImages);
// var picSection2 = document.getElementById('image2');
// picSection2.addEventListener('click', displayImages);
// var picSection3 = document.getElementById('image3');
// picSection3.addEventListener('click', displayImages);

// var displayImages = function(){
//   picSection1.src = products[selectFromProducts()].src;
//   picSection2.src = products[selectFromProducts()].src;
//   picSection3.src = products[selectFromProducts()].src;
// };
