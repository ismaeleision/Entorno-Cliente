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

    //Creo un a para añadirlo a la lista
    let a = document.createElement('a');
    a.appendChild(document.createTextNode('X'));
    a.setAttribute('id', poblaciones);
    console.log(a);

    li.appendChild(document.createTextNode(poblaciones + a));
    li.appendChild(document.createTextNode(a));

    //Se le pone de id lo mismo que al nombre
    li.setAttribute('id', poblaciones);

    document.getElementById('lista').appendChild(li);
  }
}

function eliminarPoblacion() {}
