function formulario() {
  let zodiaco;
  let dia = prompt('Introduce tu dia de nacimiento');
  let mes = prompt('Introduce el mes (en letras) en el que naciste');
  let año = prompt('Introduce el años en el que naciste');

  if (mes.toLowerCase() == 'enero') {
    if (dia <= 20) {
      zodiaco = 'capricornio';
    } else {
      zodiaco = 'acuario';
    }
  } else if (mes.toLowerCase() == 'febrero') {
    if (dia <= 19) {
      zodiaco = 'acuario';
    } else {
      zodiaco = 'piscis';
    }
  } else if (mes.toLowerCase() == 'marzo') {
    if (dia <= 20) {
      zodiaco = 'piscis';
    } else {
      zodiaco = 'aries';
    }
  } else if (mes.toLowerCase() == 'abril') {
    if (dia <= 20) {
      zodiaco = 'aries';
    } else {
      zodiaco = 'taurus';
    }
  } else if (mes.toLowerCase() == 'mayo') {
    if (dia <= 20) {
      zodiaco = 'taurus';
    } else {
      zodiaco = 'gemini';
    }
  } else if (mes.toLowerCase() == 'junio') {
    if (dia <= 21) {
      zodiaco = 'gemini';
    } else {
      zodiaco = 'cancer';
    }
  } else if (mes.toLowerCase() == 'julio') {
    if (dia <= 22) {
      zodiaco = 'camcer';
    } else {
      zodiaco = 'leo';
    }
  } else if (mes.toLowerCase() == 'agosto') {
    if (dia <= 22) {
      zodiaco = 'leo';
    } else {
      zodiaco = 'virgo';
    }
  } else if (mes.toLowerCase() == 'septiembre') {
    if (dia <= 22) {
      zodiaco = 'virgo';
    } else {
      zodiaco = 'libra';
    }
  } else if (mes.toLowerCase() == 'octubre') {
    if (dia <= 22) {
      zodiaco = 'libra';
    } else {
      zodiaco = 'escorpio';
    }
  } else if (mes.toLowerCase() == 'noviembre') {
    if (dia <= 22) {
      zodiaco = 'escorpio';
    } else {
      zodiaco = 'sagitario';
    }
  } else if (mes.toLowerCase() == 'diciembre') {
    if (dia <= 21) {
      zodiaco = 'sagitario';
    } else {
      zodiaco = 'capricornio';
    }
  }

  return "https://es.wikipedia.org/wiki/"+zodiaco+"_(constelación)";
}
