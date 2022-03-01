<?php
class VistaContenido
{
  public function __construct()
  {
    $this->html = "";
  }

  public function render()
  {
    include "cabecera.php";
    echo '<div class="container">';
    echo '<div class="row">';
    echo '<div class="col-4">';
    echo '<h3>Mecanicos a domicilio</h3>';
    echo '  <div class="col-9 align-item-center justify-content-center mt-4">Llámenos he intentaremos socorrerle en carretera, no dejaremos a un hermano motero en apuros solo';
    echo '   </div>';
    echo '  </div>';
    echo '  <div class="col-4">';
    echo '   <h3>Rutas De Carretera</h3>';
    echo '   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12696.35865800858!2d-1.8806332!3d37.2930087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1645819598076!5m2!1ses!2ses" width="300" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    echo '  </div>';
    echo '  <div class="col-4">';
    echo '   <h3>Modelos Mas Vistosas</h3>';
    echo '   <dl>';
    echo '    <dt>Harley Davison</dt>';
    echo '  <dd><img src="vistas/img/harley.jpg"></dd>';
    echo '  <dt>Triciclomotor Evolutive</dt>';
    echo '   <dd><img src="vistas/img/triciclo.jpg"></dd>';
    echo '  </dl>';
    echo '  </div>';
    echo '  </div>';
    echo '  </div>';
    include "pie.php";
  }
}
