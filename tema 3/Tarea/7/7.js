function generarNumeros() {
  //se guarda en numero un numero aleatorio entre 0 y 99
  let numero = Math.random() * 100;
  //concateno un 0 al numero
  numero = '0' + numero;
  //lo transformo a string y lo reduzco  a una longitud de 10 porque el punto cuenta
  numero = numero.toString().substr(0, 9);
  //el resultado se escribe en la pantalla
  document.write(numero);
}
