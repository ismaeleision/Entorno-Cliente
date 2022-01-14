window.addEventListener('load', function () {
  let buscar = document
    .getElementById('buscar')
    .addEventListener('click', filtrarPalabras);
});

function filtrarPalabras() {
  let texto = document.getElementById('texto').value;
  texto = normalizar(texto);
  texto = texto.split(' ');
  let min = document.getElementById('tam').value;
  let array = [];
  for (let i = 0; i < texto.length; i++) {
    if (texto[i].length >= min) {
      array.push(texto[i]);
    }
  }
  document.getElementById('result').innerHTML = array;
}

function normalizar(texto) {
  var result = texto.toLowerCase();
  result = result.replace(/[\[(){}*+?^$-_,:;"\'&@.<>|]+/g, '');
  return result;
}
