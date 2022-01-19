window.addEventListener('load', function () {
  let añadir = document
    .getElementById('añadir')
    .addEventListener('click', añadirPoblacion);
});

document.getElementById('contenedor'),
  addEventListener('click', async function (e) {
    //Boton plantarse
    let botonPlantarse = e.target.closest('button[id=eliminar]');
    if (botonPlantarse) {
      let pueblo = document.getElementById('eliminarP').value;
      document
        .getElementById('lista')
        .removeChild(document.getElementById(pueblo));
    }
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

/*
function eliminarPoblacion(x) {
  document.getElementById(x).value = '';
  console.log(document.getElementById(x).value);
}
*/
