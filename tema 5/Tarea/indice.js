window.addEventListener('load', function () {
  //Disparadores del Nombre
  let nombre1 = document
    .getElementById('nombre')
    .addEventListener('blur', mayusculas);

  let nombre2 = document
    .getElementById('nombre')
    .addEventListener('keyup', comprobacionNombre);

  //Disparadores del Apellido
  let apellido1 = document
    .getElementById('apellidos')
    .addEventListener('blur', mayusculas);

  let apellido2 = document
    .getElementById('apellidos')
    .addEventListener('keyup', comprobacionApellidos);

  //Disparadores Contraseña
  let con1 = document
    .getElementById('contraseña')
    .addEventListener('keyup', validarContraseña);

  let con3 = document
    .getElementById('contraseña')
    .addEventListener('keyup', validarReContraseña);

  let con2 = document
    .getElementById('reContraseña')
    .addEventListener('keyup', validarReContraseña);

  //Aunque bootstrap ya te lo filtre se hace
  let fecha = document
    .getElementById('fechaNacimiento')
    .addEventListener('blur', validarFecha);
});

function mayusculas() {
  console.log('zah');
}

function comprobacionNombre() {
  console.log('zah');
}

function comprobacionApellidos() {}

function validarContraseña() {}

function validarReContraseña() {
  //se coge la informacion de cada input
  let con = document.getElementById('contraseña').value;
  let recon = document.getElementById('reContraseña').value;
  for (let i = 0; i < con.length; i++) {
    //Si las contraseñas no coinciden se pone el fondo rojo
    if (con[i] != recon[i]) {
      // document.getElementById('reContraseña').style.background = 'red';
      document.getElementById('reContraseña').style.borderColor = 'red';

      //Si coinciden se pone el fondo blanco y el borde verde
    } else {
      //document.getElementById('reContraseña').style.background = 'white';
      document.getElementById('reContraseña').style.borderColor = 'green';
    }
  }
}

function validarFecha() {}
