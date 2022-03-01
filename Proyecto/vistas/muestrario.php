<?= include "cabecera.php" ?>
<h6>*Precios orientativos. Podriamos no poseer el modelo que se muestra, lamentamos las molestias.</h6>
<div class="container" ng-app="miApp">
  <div class="row" ng-controller="controlador">
    <div class='col-4' ng-repeat="moto in motos">
      <img src="{{ moto.imagen}}">
      <p>{{moto.nombre}}</p>
      <p>{{moto.precio}}</p>
    </div>
  </div>
</div>
<?= include "footer.php" ?>