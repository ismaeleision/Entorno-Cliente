<?php
class VistaInicio
{
  public function __construct()
  {
    $this->html = "";
  }

  public function render()
  {
    include_once "cabecera.php";
    echo '<div class="container" id="contenedor">';
    echo '<div class="row">';
    echo  '<div class="col-8">';

    echo   '</div>';
    echo   '<div class="col-4">';
    echo    '<img src="./vistas/img/procesion.jpg" width="400px" height="300px">';
    echo   '</div>';
    echo   '</div>';
    echo '</div>';
    include_once "pie.php";
  }
}
