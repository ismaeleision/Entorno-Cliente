var miApp = angular.module('miApp', []);
miApp.controller('controlador', function ($scope) {
  $scope.motos = motos;
});

var motos = [
  {
    nombre: 'Harley Davison',
    precio: 1490.0,
    imagen: 'vistas/img/harley.jpg',
  },
  {
    nombre: 'Yamaha',
    precio: 1750.0,
    imagen: 'vistas/img/yamaha.jpg',
  },
  {
    nombre: 'Custom',
    precio: 1499.0,
    imagen: 'vistas/img/custom.jpg',
  },
  {
    nombre: 'Cross',
    precio: 3099.0,
    imagen: 'vistas/img/cross.jpg',
  },
  {
    nombre: 'Carretera',
    precio: 1794.9,
    imagen: 'vistas/img/carretera.jpg',
  },
  {
    nombre: 'Eco Thumbshit',
    precio: 17599.9,
    imagen: 'vistas/img/triciclo.jpg',
  },
];
