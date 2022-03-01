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

  <!--JQUERY-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>

<body>
  <header class="container mt-4">
    <div class="row">
      <div class="col-3">
        <img src="./vistas/img/logo.png">
      </div>
      <div class="col-7 d-flex flex-wrap align-items-center justify-content-center py-3 m-3 border-bottom">
        <ul class="nav col-4 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="enrutador.php?accion=inicio" class=" btn nav-link px-2 link-dark" id="inicio">Inicio</a></li>
          <li><a href="enrutador.php?accion=servicios" class=" btn nav-link px-2 link-dark ms-5" id="servicios">Servicios</a></li>
          <li><a href="enrutador.php?accion=muestrario" class=" btn nav-link px-2 link-dark ms-5" id="muestrario">Muestrario</a></li>
        </ul>
      </div>
    </div>
  </header>