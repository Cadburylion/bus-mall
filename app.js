'use strict';
 var totalClicks = 0;
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


  // imagesOnPreviousScreen.concat(imagesOnScreen);
  return imagesOnScreen;
}

// assign variables to DOM id's
var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');

// add event listeners to DOM id's that invoke handleEvent when user clicks any image

firstImage.addEventListener('click', handleEvent);
secondImage.addEventListener('click', handleEvent);
thirdImage.addEventListener('click', handleEvent);


// Displays three randomly selected images on the index page

function handleEvent(event){
  totalClicks++;
  console.log(totalClicks);

  if (firstImage === event.target){
    imagesOnScreen[0].clickAmount++;
    console.log(event.target);
  } else if (secondImage === event.target){
    imagesOnScreen[1].clickAmount++;
    console.log(event.target);
  } else {
    imagesOnScreen[2].clickAmount++;
    console.log(event.target);
  }

  if (totalClicks === 25){
    firstImage.removeEventListener('click', handleEvent);
    secondImage.removeEventListener('click', handleEvent);
    thirdImage.removeEventListener('click', handleEvent);

    displayMetrics();
    // clear image elements
  }


  selectThreeRandomImages();

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



function displayMetrics(){


  images = images.concat(imagesOnSecondPreviousScreen, imagesOnPreviousScreen, imagesOnScreen);


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
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
