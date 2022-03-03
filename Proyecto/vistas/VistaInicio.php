<?php
class VistaInicio
{
  public function render()
  {
    include_once "cabecera.php"; ?>
    <div class="container" id="contenedor">
      <div class="row">
        <div class="col-12 col-lg-8 mt-4">
          <h3 class="fw-bold">Mecanicos a domicilio</h3>
          <div class="col-9 align-item-center justify-content-center mt-4">Llámenos he intentaremos socorrerle en carretera, no dejaremos a un hermano motero en apuros solo</div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
          <img src="./vistas/img/procesion.jpg" width="400px" height="300px">
        </div>
      </div>
    </div>
<?php include_once "pie.php";
  }
}
