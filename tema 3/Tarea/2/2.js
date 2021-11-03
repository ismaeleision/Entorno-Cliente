function fecha() {
  let tiempo = new Date();
  document.write(
    tiempo.getDate() + ' de ' + mesLetras() + ' de ' + tiempo.getFullYear()
  );
}

function mesLetras() {
  let tiempo = new Date();
  if (tiempo.getMonth() == 1) {
    return 'Enero';
  } else if (tiempo.getMonth() == 2) {
    return 'Febrero';
  } else if (tiempo.getMonth() == 3) {
    return 'Marzo';
  } else if (tiempo.getMonth() == 4) {
    return 'Abril';
  } else if (tiempo.getMonth() == 5) {
    return 'Mayo';
  } else if (tiempo.getMonth() == 6) {
    return 'Junio';
  } else if (tiempo.getMonth() == 7) {
    return 'Julio';
  } else if (tiempo.getMonth() == 8) {
    return 'Agosto';
  } else if (tiempo.getMonth() == 9) {
    return 'Septiembre';
  } else if (tiempo.getMonth() == 10) {
    return 'Octubre';
  } else if (tiempo.getMonth() == 11) {
    return 'Noviembre';
  } else if (tiempo.getMonth() == 12) {
    return 'Diciembre';
  }
}
