<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script type="text/javascript">
    function manipularArray(array) {
      let ordenado = ordenarArray(array);
      let primero = array[0];
      let ultimo = array[array.lenght];
      let cantidad = array.lenght;
      document.write('La primera palabra puesta es ' + primero);
      document.write('La ultima palabra es ' + ultimo);
      document.write('Se han introducido ' + cantidad);
      document.write('<table>');
      document.write("<tr>");
      for (let i = 0; i < array.lenght; i++) {
        document.write("<td>" + array[i] + "</td>");
      }
      document.write("</tr></table>");
    }

    function ordenarArray(array) {
      return array.sort();
    }
  </script>

</head>

<body>
  <?php
  if ($_POST) {
    if (isset($_POST['enviar'])) {
      if (isset($_POST['palabra'])) {
        $array = $_POST['palabra'];
      }
    }
  }
  ?>
  <div id="texto" onload="manipularArray(<?= $array ?>)">

  </div>
</body>

</html>