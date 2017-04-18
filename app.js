'use strict';

// var listOfImages = [
//   'img/bag.jpg',
//   'img/banana.jpg',
//   'img/bathroom.jpg',
//   'img/boots.jpg',
//   'img/breakfast',
//   'img/bubblegum.jpg',
//   'img/chair',
//   'img/cthulhu.jpg',
//   'img/dog-duck.jpg',
//   'img/dragon.jpg',
//   'img/pen.jpg',
//   'img/pet-sweetp.jpg',
//   'img/scissors.jpg',
//   'img/shark.jpg',
//   'img/sweep.png',
//   'img/tauntaun.jpg',
//   'img/unicorn.jpg',
//   'img/usb.gif',
//   'img/water-can.jpg',
//   'img/wine-glass.jpg'];

// var survayImageData = [];
// var totalClicked = 0;
// var totalDisplayed = 0;

// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

var products = [];

function selectFromProducts() {
  return Math.floor(Math.random() * products.length);
}

function SurveyImage(name, src) {
  this.name = name;
  this.src = src;
  this.shownAmount = 0;
  this.clickAmount = 0;
  products.push(this);
  // this.htmlId = htmlId;
  // console.log('aw jeah');
}



// surveyImageContainer.appendChild(bag.src)

// SurveyImage.prototype.createImageEl = function(eventHandler){
//   var imgEl = document.createElement('img');
//   imgEl.setAttribute('id', this.name);
//   imgEl.setAttribute('src', this.src);
//   imgEl.addEventListener('click', eventHandler);
//   this.timesDisplayed++;
//   totalDisplayed++;
//   return imgEl;
// }


function displayImages(event){
  // var selectedImage = event.target;
  console.log(event);
  picSection1.src = products[selectFromProducts()].src;

  picSection2.src = products[selectFromProducts()].src;
  picSection3.src = products[selectFromProducts()].src;
}



var picSection1 = document.getElementById('image1');
picSection1.addEventListener('click', displayImages);
var picSection2 = document.getElementById('image2');
picSection2.addEventListener('click', displayImages);
var picSection3 = document.getElementById('image3');
picSection3.addEventListener('click', displayImages);

// var displayImages = function(){
//   picSection1.src = products[selectFromProducts()].src;
//   picSection2.src = products[selectFromProducts()].src;
//   picSection3.src = products[selectFromProducts()].src;
// };



var bag = new SurveyImage('bag', 'img/bag.jpg');
var banana = new SurveyImage('banana', 'img/banana.jpg');
var bathroom = new SurveyImage('bathroom', 'img/bathroom.jpg');
var boots = new SurveyImage('boots', 'img/boots.jpg');
var breakfast = new SurveyImage('breakfast', 'img/breakfast.jpg');
var bubblegum = new SurveyImage('bubblegum', 'img/bubblegum.jpg');
var chair = new SurveyImage('chair', 'img/chair.jpg');
var cthulhu = new SurveyImage('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new SurveyImage('dog-duck', 'img/dog-duck.jpg');
var dragon = new SurveyImage('dragon', 'img/dragon.jpg');
var pen = new SurveyImage('pen', 'img/pen.jpg');
var petSweep = new SurveyImage('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new SurveyImage('scissors', 'img/scissors.jpg');
var shark = new SurveyImage('shark', 'img/shark.jpg');
var sweep = new SurveyImage('sweep', 'img/sweep.png');
var tauntaun = new SurveyImage('tauntaun', 'img/tauntaun.jpg');
var unicorn = new SurveyImage('unicorn', 'img/unicorn.jpg');
var usb = new SurveyImage('usb', 'img/usb.gif');
var waterCan = new SurveyImage('water-can', 'img/water-can.jpg');
var wineGlass = new SurveyImage('wine-glass', 'img/wine-glass.jpg');

displayImages();
