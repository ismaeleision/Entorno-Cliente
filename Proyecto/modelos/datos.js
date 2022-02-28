var miApp = angular.module('miApp', []);
miApp.controller('controlador', function ($scope) {
  $scope.motos = motos;
});

var motos = [
  {
    nombre: 'Harley Davison',
    precio: 149.0,
    imagen: 'img/harley.jpg',
  },
  {
    nombre: 'Yamaha',
    precio: 149.0,
    imagen: 'img/yamaha.jpg',
  },
  {
    nombre: 'Custom',
    precio: 1499.0,
    imagen: 'img/custom.jpg',
  },
  {
    nombre: 'Cross',
    precio: 399.0,
    imagen: 'img/cross.jpg',
  },
  {
    nombre: 'Carretera',
    precio: 174.9,
    imagen: 'img/carretera.jpg',
  },
  {
    nombre: 'Eco Thumbshit',
    precio: 174.9,
    imagen: 'img/triciclo.jpg',
  },
];
