<?php
class ControladorProyecto
{
  public static function mostrarInicio()
  {
    $vistaL = new VistaInicio();
    $vistaL->render();
  }

  public static function mostrarServicios()
  {
    $vistaL = new VistaContenido();
    $vistaL->render();
  }

  public static function mostrarMuestrario()
  {
    $vistaL = new VistaMuestrario();
    $vistaL->render();
  }
}
