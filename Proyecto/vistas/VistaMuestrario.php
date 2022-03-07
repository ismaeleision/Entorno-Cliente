<?php
class VistaMuestrario
{
  public function render()
  {
    include_once "cabecera.php"; ?>

    <div ng-app="miApp">

      <div class="container" ng-controller="controlador">
        <div class="row">
          <div class="col-8">
            <h6 class="fst-italic m-4">*Precios orientativos. Podriamos no poseer el modelo que se muestra, lamentamos las molestias.</h6>
          </div>
          <div class="col-2">
            <input class="form-control" type="search" placeholder="Buscador" aria-label="Search" ng-model="nombre">
          </div>
        </div>
        <div class="row">
          <div class="col-8 col-lg-3 ms-5 mt-2" ng-repeat="moto in motos | filter: nombre ">
            <img src="{{ moto.imagen}}" class="img-fluid w-auto">
            <p>{{moto.nombre}}</p>
            <p>{{moto.precio}}€</p>
          </div>
        </div>
      </div>
    </div>
    <script src="modelos/datos.js"></script>
<?php include_once "pie.php";
  }
}
