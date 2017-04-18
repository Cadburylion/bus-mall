'use strict';

console.log('it works!');

// make a constructor for a photo

function Photo(name, filename) {
  this.name = name;
  this.filename = './img/' + filename;
  this.clickCount = 0;
  this.displayCount = 0;
}

var photosOnSecondToLastScreen = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];
var photos = [
  new Photo('bag head', 'bag.jpg'),
  new Photo('banana chopper', 'banana.jpg'),
  new Photo('bathroom party', 'bathroom.jpg'),
  new Photo('rain boots', 'boots.jpg'),
  new Photo('breakfast', 'breakfast.jpg'),

  new Photo('bubblegum', 'bubblegum.jpg'),
  new Photo('chair', 'chair.jpg'),
  new Photo('cthulhu', 'cthulhu.jpg'),
  new Photo('dog-duck', 'dog-duck.jpg'),
  new Photo('dragon', 'dragon.jpg'),

  new Photo('pen', 'pen.jpg'),
  new Photo('pet-sweep', 'pet-sweep.jpg'),
  new Photo('scissors', 'scissors.jpg'),
  new Photo('shark', 'shark.jpg'),
  new Photo('sweep', 'sweep.png'),

  new Photo('tauntaun', 'tauntaun.jpg'),
  new Photo('unicorn', 'unicorn.jpg'),
  new Photo('usb', 'usb.gif'),
  new Photo('water-can', 'water-can.jpg'),
  new Photo('wine-glass', 'wine-glass.jpg'),
];

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}


// get three random image-size

function getThreeRandomPhotos(){

  photos = photos.concat(phootosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;

  // clears out photosOnScreen
  photosOnScreen = [];
  // create a var nextPhoto to keep track of the next Photo we take out of photos
  // splice out a photo object (which removes it from photos)
  var nextPhoto = photos.splice(getRandomIndex(photos), 1);
  // concat the array returned by splice onto photosOnScreen
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  // repeat two more times to get three images
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);


  photosOnPreviousScreen.concat(photosOnScreen);
  return photosOnScreen;
}
