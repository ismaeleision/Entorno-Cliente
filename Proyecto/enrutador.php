<?php
//AUTOLOAD
function autocarga($clase)
{
  $ruta = "./controladores/$clase.php";
  if (file_exists($ruta)) {
    include_once $ruta;
  }

  $ruta = "./modelos/$clase.php";
  if (file_exists($ruta)) {
    include_once $ruta;
  }

  $ruta = "./vistas/$clase.php";
  if (file_exists($ruta)) {
    include_once $ruta;
  }
}
spl_autoload_register("autocarga");

if ($_REQUEST) {
  if (isset($_REQUEST['accion'])) {
    //Muestra la vista inicio
    if ($_REQUEST['accion'] == "inicio") {
      ControladorProyecto::mostrarInicio();
    }

    //Muestra la vista Servicios
    if ($_REQUEST['accion'] == "servicios") {
      ControladorProyecto::mostrarServicios();
    }

    //Muestra la vista muestrario
    if ($_REQUEST['accion'] == "muestrario") {
      ControladorProyecto::mostrarMuestrario();
    }
  }
}
