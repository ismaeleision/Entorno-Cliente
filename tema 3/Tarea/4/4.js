function iniciar() {
  //guarda en la variable el texto introducido
  let texto = prompt('Introduce un texto');
  //guarda la longitud de la palabra
  let longitud = texto.length;
  //contador para el bucle while
  let count = 0;
  while (count < longitud) {
    //si la letra actual es igual a la letra de la posicion anterior
    if (texto.charAt(count) == texto.charAt(count - 1)) {
      //la reemplaza por un guion
      texto = texto.replace(texto.charAt(count), '-');
    }
    count++;
  }
  //se recorre la palabra retirando los guiones
  for (let i = 0; i < longitud; i++) {
    texto = texto.replace('-', '');
  }

  //envia el texto al objeto con el id textual
  document.getElementById('textual').innerHTML = texto;
}
