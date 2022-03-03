<?php
class VistaContenido
{
  public function render()
  {
    include "cabecera.php" ?>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 mt-4 ms-4">
          <h3 class="fw-bold">Modelos Mas Vistas</h3>
          <dl>
            <dd>Harley Davison</dd>
            <dd><img src="vistas/img/harley.jpg"></dd>
            <dd>Triciclomotor Evolutive</dd>
            <dd><img src="vistas/img/triciclo.jpg"></dd>
          </dl>
        </div>
        <div class="col-12 col-lg-4 mt-4">
          <h3 class="fw-bold">Rutas De Carretera</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12696.35865800858!2d-1.8806332!3d37.2930087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1645819598076!5m2!1ses!2ses" style="border:0;" allowfullscreen="" height="300px" width="500px" loading="lazy"></iframe>
        </div>
      </div>
    </div>
<?php include "pie.php";
  }
}
?>