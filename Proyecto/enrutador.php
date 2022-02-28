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
    //Según la acción llamaremos a un método u otro del Controlador
    if ($_REQUEST['accion'] == "inicio") {
      ControladorProyecto::mostrarInicio();
    }
  }
}
