<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <!--BOOSTRAP-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!--ANGULAR-->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>

</head>

<body>
  <!--Menu Hamburguesa-->
  <nav class="navbar navbar-expand-md mb-4">
    <div class="col-6 col-lg-3">
      <img src="./vistas/img/logo.png" class="img-fluid w-auto">
    </div>
    <div class="col-5 col-lg-7 d-flex flex-wrap align-items-center justify-content-center p-5 m-3 border-bottom">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <img class="navbar-toggler-icon" src="./vistas/img/lista.png">
      </button>
      <div class="collapse navbar-collapse bg-secondary bg-gradient w-auto bg-opacity-75 rounded-3 " id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0 p-3">
          <li class="nav-item">
            <a class="nav-link ms-5 <?php if ($_REQUEST['accion'] == "inicio") {
                                      echo 'fw-bold text-decoration-underline text-dark';
                                    } else {
                                      echo 'text-white';
                                    } ?>" href="enrutador.php?accion=inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5 <?php if ($_REQUEST['accion'] == "servicios") {
                                      echo 'fw-bold text-decoration-underline text-dark';
                                    } else {
                                      echo 'text-white';
                                    } ?>" href="enrutador.php?accion=servicios">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5 <?php if ($_REQUEST['accion'] == "muestrario") {
                                      echo 'fw-bold text-decoration-underline text-dark';
                                    } else {
                                      echo 'text-white';
                                    } ?>" href="enrutador.php?accion=muestrario">Muestrario</a>
          </li>
        </ul>
      </div>
  </nav>