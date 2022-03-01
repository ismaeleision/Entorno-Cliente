<?php
class VistaMuestrario
{
  public function __construct()
  {
    $this->html = "";
  }

  public function render()
  {
    include_once "cabecera.php";

    echo '<div class="container" ng-app="miApp">';
    echo ' <h6 class="fst-italic m-4">*Precios orientativos. Podriamos no poseer el modelo que se muestra, lamentamos las molestias.</h6>';
    echo '  <div class="row" ng-controller="controlador">';
    echo '    <div class="col-4" ng-repeat="moto in motos">';
    echo '      <img src="{{ moto.imagen}}">';
    echo '      <p>{{moto.nombre}}</p>';
    echo '      <p>{{moto.precio}}</p>';
    echo '    </div>';
    echo '  </div>';
    echo '</div>';
    echo '<script src="modelos/datos.js"></script>';
    include_once "pie.php";
  }
}
