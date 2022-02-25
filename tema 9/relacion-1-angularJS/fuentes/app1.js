var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {
  $scope.articulo = articulo;
});

var articulo = {
  nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
  precio: 149.0,
  imagen: 'img/fujifilm.jpg',
  stock: 12,
};

miApp.controller('controlador2', function ($scope) {
  $scope.articulos = articulos;
  $scope.bg = function (stock) {
    if (stock > 15) {
      return 'bg-success text-light';
    } else if (stock < 15 && stock > 0) {
      return 'bg-warning text-light';
    } else {
      return 'bg-danger text-light';
    }
  };
});

var articulos = [
  {
    nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
    precio: 149.0,
    imagen: 'img/fujifilm.jpg',
    stock: 12,
    descuento: 19,
  },
  {
    nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
    precio: 149.0,
    imagen: 'img/fujifilm2.jpg',
    stock: 5,
    descuento: 25,
  },
  {
    nombre: 'PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV',
    precio: 1499.0,
    imagen: 'img/tv1.jpg',
    stock: 9,
    descuento: 60,
  },
  {
    nombre: 'SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone',
    precio: 399.0,
    imagen: 'img/fujifilm3.jpg',
    stock: 22,
    descuento: 45,
  },
  {
    nombre: 'WD WD Red WD40EFRX - 4 TB - Disco duro interno - 3.5"',
    precio: 174.9,
    imagen: 'img/disco-duro.jpg',
    stock: 0,
    descuento: 89,
  },
  {
    nombre: 'SAMSUNG Gear Fit - negro - Reloj conectado',
    precio: 199.0,
    imagen: 'img/samsung-gear.jpg',
    stock: 34,
    descuento: 12,
  },
];
