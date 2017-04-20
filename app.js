'use strict';

var totalClicks = 0;
// image object constructor
function SurveyImage(name, filename) {
  this.name = name;
  this.filename = './img/' + filename;
  this.shownAmount = 0;
  this.clickAmount = 0;
  this.chosenPercent = 0;
}

// return random images array index
function selectRandomImagesIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// calculates percentage of times an item was picked when shown
function getPercentage(click, shown){
  return click / shown * 100;
}

var imagesOnSecondPreviousScreen = [];
var imagesOnPreviousScreen = [];
var imagesOnScreen = [];

var images = [
  new SurveyImage('bag', 'bag.jpg'),
  new SurveyImage('banana', 'banana.jpg'),
  new SurveyImage('bathroom-media-stand', 'bathroom.jpg'),
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

try {
  images = JSON.parse(localStorage.images);
} catch(error){
  console.log('something went wrong getting local storage', error);
}

function selectThreeRandomImages(){
// objects in imagesOnSecondPreviousScreen added to images array
// console.log('select images', imagesOnSecondPreviousScreen);
  images = images.concat(imagesOnSecondPreviousScreen);
  // imagesOnSecondPreviousScreen assigned value of objects in imagesOnPreviousScreen
  imagesOnSecondPreviousScreen = imagesOnPreviousScreen;
  // imagesOnPreviousScreen assigned value of objects in imagesOnScreen
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


  // imagesOnPreviousScreen.concat(imagesOnScreen);
  return imagesOnScreen;
}

// assign variables to DOM id's
var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');

// add event listeners to DOM id's that invoke handleEventClick when user clicks any image

firstImage.addEventListener('click', handleEventClick);
secondImage.addEventListener('click', handleEventClick);
thirdImage.addEventListener('click', handleEventClick);

// Displays three randomly selected images on the index page

function handleEventClick(event){
  console.log('images', images);
  totalClicks++;
//if the event fired on the firstImage element, increment clickAmount on imagesOnScreen[0]
  if (firstImage === event.target){
    imagesOnScreen[0].clickAmount++;
//if the event fired on the secondImage element, increment clickAmount on imagesOnScreen[1]
  } else if (secondImage === event.target){
    imagesOnScreen[1].clickAmount++;
//if the event fired on the thirdImage element, increment clickAmount on imagesOnScreen[2]
  } else {
    imagesOnScreen[2].clickAmount++;
  }

  if (totalClicks === 25){
    // set the content of the surveyImageContainer element to nothing, erasing it
    var surveyImageContainer = document.getElementById('surveyImageContainer');
    surveyImageContainer.textContent = '';
    images = images.concat(imagesOnSecondPreviousScreen, imagesOnPreviousScreen, imagesOnScreen);

    displayMetrics();

    try {
      localStorage.images = JSON.stringify(images);
    } catch(error){
      console.log('something went wrong', error);
    }
  }

  //invoke selectThreeRandomImages to get 3 random objects into imagesOnScreen array
  selectThreeRandomImages();
  //populate img elements on HTML with 3 random images
  firstImage.src = imagesOnScreen[0].filename;
  imagesOnScreen[0].shownAmount++;
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

// populate Chartjs with data
function displayMetrics(){

  //invokes percentage calculator with object parameter arguments and updates chosenPercent parameter
  for (var i = 0; i < images.length; i++){
    images[i].chosenPercent = getPercentage(images[i].clickAmount, images[i].shownAmount);
  }

  //return all objects to images array

  var ctx = document.getElementById('survey-metrics').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: [
        images[0].name,
        images[1].name,
        images[2].name,
        images[3].name,
        images[4].name,
        images[5].name,
        images[6].name,
        images[7].name,
        images[8].name,
        images[9].name,
        images[10].name,
        images[11].name,
        images[12].name,
        images[13].name,
        images[14].name,
        images[15].name,
        images[16].name,
        images[17].name,
        images[18].name,
        images[19].name,
      ],
      datasets: [{
        label: '# of times chosen',
        data: [
          images[0].clickAmount,
          images[1].clickAmount,
          images[2].clickAmount,
          images[3].clickAmount,
          images[4].clickAmount,
          images[5].clickAmount,
          images[6].clickAmount,
          images[7].clickAmount,
          images[8].clickAmount,
          images[9].clickAmount,
          images[10].clickAmount,
          images[11].clickAmount,
          images[12].clickAmount,
          images[13].clickAmount,
          images[14].clickAmount,
          images[15].clickAmount,
          images[16].clickAmount,
          images[17].clickAmount,
          images[18].clickAmount,
          images[19].clickAmount,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(84, 132, 50, 0.2)',
          'rgba(39, 23, 184, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(123, 255, 74, 0.2)',
          'rgba(23, 132, 230, 0.2)',
          'rgba(173, 234, 100, 0.2)',
          'rgba(98, 200, 132, 0.2)',
          'rgba(25, 50, 255, 0.2)',
          'rgba(123, 123, 123, 0.2)',
          'rgba(223, 218, 12, 0.2)',
          'rgba(90, 90, 255, 0.2)',
          'rgba(178, 84, 183, 0.2)',
          'rgba(50, 83, 234, 0.2)',
        ],
        // borderColor: [
        //   'rgba(255,99,132,1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)'
        // ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

// below is cleaner chart code template

// var data = {
//   labels: ['duncan', 'slug', 'glorb', 'quazi'],
//   datasets: [
//     {
//       backgroundColor: [
//         '#f0f',
//         '#0f0',
//         '#f00',
//         '#0ff',
//       ],
//       data: [ 23, 34, 73, 60]
//     },
//     {
//       backgroundImage: [
//         'url("./assets/banana.jpg")',
//         '#0f0',
//         '#f00',
//         '#0ff',
//       ],
//       data: [ 34, 44, 99, 70]
//     },
//   ]
// }
//
// new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
// });
