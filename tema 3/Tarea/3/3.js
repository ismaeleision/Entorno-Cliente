function formulario() {
  let zodiaco;
  //pedimos por pantalla su fecha de nacimiento y se guarda en variables
  let dia = prompt('Introduce tu dia de nacimiento');
  let mes = prompt('Introduce el mes (en letras) en el que naciste');
  let año = prompt('Introduce el años en el que naciste');

  //si el mes en minuscula coincide con el dado y el dia del rango del horoscopo
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
      zodiaco = 'tauro';
    }
  } else if (mes.toLowerCase() == 'mayo') {
    if (dia <= 20) {
      zodiaco = 'tauro';
    } else {
      zodiaco = 'geminis';
    }
  } else if (mes.toLowerCase() == 'junio') {
    if (dia <= 21) {
      zodiaco = 'geminis';
    } else {
      zodiaco = 'cancer';
    }
  } else if (mes.toLowerCase() == 'julio') {
    if (dia <= 22) {
      zodiaco = 'cancer';
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
      zodiaco = 'escorpion';
    }
  } else if (mes.toLowerCase() == 'noviembre') {
    if (dia <= 22) {
      zodiaco = 'escorpion';
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

  //manda al iframe el src que le toca
  document.getElementById('zodiaco').src =
    'https://www.univision.com/horoscopos/' + zodiaco;
}
