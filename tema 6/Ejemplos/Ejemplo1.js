window.addEventListener('load', function () {
  let añadir = document
    .getElementById('añadir')
    .addEventListener('click', añadirPoblacion);
  let eliminar = document
    .getElementById('eliminar')
    .addEventListener('click', eliminarPoblacion);
});

function añadirPoblacion() {
  let poblaciones = document.getElementById('texto').value;

  //si el input no esta vacio
  if (poblaciones.length != 0) {
    let li = document.createElement('li');

    li.appendChild(document.createTextNode(poblaciones));

    //Se le pone de id lo mismo que al nombre
    li.setAttribute('id', poblaciones);

    document.getElementById('lista').appendChild(li);
  }
}

function eliminarPoblacion() {}
