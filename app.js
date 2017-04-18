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
};

var imagesonSecondPreviousScreen = [];
var imagesOnPreviousScreen = [];
var imagesOnScreen = [];

var images = [
  new SurveyImage('bag', 'img/bag.jpg');
  new SurveyImage('banana', 'img/banana.jpg');
  new SurveyImage('bathroom', 'img/bathroom.jpg');
  new SurveyImage('boots', 'img/boots.jpg');
  new SurveyImage('breakfast', 'img/breakfast.jpg');
  new SurveyImage('bubblegum', 'img/bubblegum.jpg');
  new SurveyImage('chair', 'img/chair.jpg');
  new SurveyImage('cthulhu', 'img/cthulhu.jpg');
  new SurveyImage('dog-duck', 'img/dog-duck.jpg');
  new SurveyImage('dragon', 'img/dragon.jpg');
  new SurveyImage('pen', 'img/pen.jpg');
  new SurveyImage('pet-sweep', 'img/pet-sweep.jpg');
  new SurveyImage('scissors', 'img/scissors.jpg');
  new SurveyImage('shark', 'img/shark.jpg');
  new SurveyImage('sweep', 'img/sweep.png');
  new SurveyImage('tauntaun', 'img/tauntaun.jpg');
  new SurveyImage('unicorn', 'img/unicorn.jpg');
  new SurveyImage('usb', 'img/usb.gif');
  new SurveyImage('water-can', 'img/water-can.jpg');
  new SurveyImage('wine-glass', 'img/wine-glass.jpg');
];


function selectThreeRandomPhotos(){

  images = images.concat(phootosOnSecondToLastScreen);
  imagesOnSecondToLastScreen = imagesOnPreviousScreen;
  imagesOnPreviousScreen = imagesOnScreen;

  // clears out imagesOnScreen
  imagesOnScreen = [];
  // create a var nextPhoto to keep track of the next Photo we take out of images
  // splice out a photo object (which removes it from images)
  var nextPhoto = images.splice(selectRandomImagesIndex(images), 1);
  // concat the array returned by splice onto imagesOnScreen
  imagesOnScreen = imagesOnScreen.concat(nextPhoto);
  // repeat two more times to get three images
  nextPhoto = images.splice(selectRandomImagesIndex(images), 1);
  imagesOnScreen = imagesOnScreen.concat(nextPhoto);
  nextPhoto = images.splice(selectRandomImagesIndex(images), 1);
  imagesOnScreen = imagesOnScreen.concat(nextPhoto);


  imagesOnPreviousScreen.concat(imagesOnScreen);
  return imagesOnScreen;
}





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
