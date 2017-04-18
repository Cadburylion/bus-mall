'use strict';

var canvas = document.getElementById('chart-canvas');
canvas.height = '500px';
canvas.width = '500px';


var ctx = canvas.getContext('2d');

// use Chartjs

var data ={
  labels: ['duncan', 'slug', 'glorb', 'quazi'],
  datasets: [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      data: [ 23, 34, 40, 44,]
    }]
};

new Chart(ctx, {
  type: 'bar',
  data: data,
});


//        start x, y, width, height
// ctx.fillRect(200, 300, 50, 100);


// var peeps = [
//   {
//     name: 'dunk',
//     age: 16,
//     colo: 'blue',
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
//     name: 'lion',
//     age: 77,
//     color: 'black',
//   },
//   {
//     name: 'tiger',
//     age: 100,
//     color: 'magenta',
//   },
// ];
//
//
// var barWidth = 500 / peeps.length;
// for (var i = 0; i < peeps.length; i++){
//   ctx.fillStyle = (peeps[i].color);
//   ctx.fillRect( i * barWidth, 0, barWidth, peeps[i].age / 100 * 500);
// }
