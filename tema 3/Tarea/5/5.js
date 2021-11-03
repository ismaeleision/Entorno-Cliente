function trastocar() {
  //guarda en texto los datos introducidos al prompt
  let texto = prompt('Introduce un texto');
  //contiene la longitud de la cadena text
  let longitud = texto.length;
  //variable donde guardaremos las letras cambiadas
  let palabra = '';

  for (let i = 0; i < longitud; i++) {
    //si la letra coindice consigo misma pero en minuscula
    if (texto.charAt(i) == texto.charAt(i).toLowerCase()) {
      //añade la letra a palabra en mayuscula
      palabra += texto.charAt(i).toUpperCase();
      //si la letra coincdie consigo misma pero en mayuscula
    } else if (texto.charAt(i) == texto.charAt(i).toUpperCase()) {
      //añade la letra a palabra en minuscula
      palabra += texto.charAt(i).toLowerCase();
    }
  }
  //envia palabra al documento
  document.write(palabra);
}
