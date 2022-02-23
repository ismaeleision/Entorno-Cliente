var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {
  $scope.articulo = articulo;
});

var articulo = {
  nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
  precio: 149.0,
  imagen: 'img/fujifilm.jpg',
};
