'use strict';

var randomImages = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast',
  'img/bubblegum.jpg',
  'img/chair',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweetp.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg'];

function Image(name, filepath, htmlId) {
  this.name = name;
  this.filepath = filepath;
  this.shownAmount = 0;
  this.clickAmount = 0;
  this.htmlId = htmlId;
}

function handleImageDisplayClick(event){
  // stop the browser from reloading
  event.preventDefault();

  var picture = event.target; // event target is always the object you added the event listener to


  var randomImage = new Image(name, filePath, htmlId);
  // image.getCookiesPerHour();
  // image.getTable();

}

var displayRandomImage = document.getElementById('display-new-image');
displayRandomImage.addEventListener('click', handleImageDisplayClick);
// var bathroom = new Image('bathroom', 'img/bathroom.jpg', 'test');




//   function openPack() {
//     var playerArraycopy = randomImages.slice();//getting new copy of initial input
//     function getRandomImage(){
//         return playerArraycopy.splice([Math.floor(Math.random() * playerArraycopy.length)],1)[0];//calculating a new random image and removing it from copy to exclude duplicates
//     }
//
//    document.getElementById("player2").src = "image/" + getRandomImg();
//    document.getElementById("pack").src = "image/" + getRandomImg();
//    document.getElementById("player3").src = "image/" + getRandomImg();
// }
