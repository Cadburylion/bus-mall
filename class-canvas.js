'use strict';

var canvas = document.getElementById('chart-canvas');
canvas.width = '500px';
canvas.height = '500px';


var ctx = canvas.getContext('2d');


// use chartjs
var data = {
  labels: ['duncan', 'slug', 'glorb', 'quazi'],
  datasets: [
    {
      backgroundColor: [
        '#f0f',
        '#0f0',
        '#f00',
        '#0ff',
      ],
      data: [ 23, 34, 73, 60]
    },
    {
      backgroundImage: [
        'url("./assets/banana.jpg")',
        '#0f0',
        '#f00',
        '#0ff',
      ],
      data: [ 34, 44, 99, 70]
    },
  ]
}


new Chart(ctx, {
  type: 'doughnut',
  data: data,
});


//  startx, starty, width, height
// ctx.fillRect(200, 300, 50, 100)

//
// var peeps = [
//   {
//     name: 'dunk',
//     age: 16,
//     color: 'blue',
//   },
//   {
//     name: 'slug',
//     age: 20,
//     color: 'green',
//   },
//   {
//     name: 'byte',
//     age: 44,
//     color: 'red',
//   },
//   {
//     name: 'byte',
//     age: 77,
//     color: 'black',
//   },
//   {
//     name: 'byte',
//     age: 100,
//     color: 'magenta',
//   },
// ]
//
// var barWidth = 500 / peeps.length;
// for(var i = 0; i < peeps.length; i++){
//   ctx.fillStyle = peeps[i].color;
//   ctx.fillRect( i * barWidth, 0, barWidth, peeps[i].age / 100 * 500);
// }


















//
// ) {
//
// }
