window.addEventListener('load', function () {
  let añadir = document
    .getElementsByName('addFile')
    .addEventListener('click', añadirTabla(this.parentNode));
  let quitar = document
    .getElementsByName('remFile')
    .addEventListener('click', quitarTabla);
});

function añadirTabla(x) {
  console.log(x);
}

function quitarTabla() {}
