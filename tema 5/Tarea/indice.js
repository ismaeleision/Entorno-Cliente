window.addEventListener('load', function () {
  //Disparadores del Nombre
  let nombre1 = document
    .getElementById('nom')
    .addEventListener('blur', mayusculasNombre);

  let nombre2 = document
    .getElementById('nom')
    .addEventListener('keyup', comprobacionNombre);

  //Disparadores del Apellido
  let apellido1 = document
    .getElementById('apellidos')
    .addEventListener('blur', mayusculasApellidos);

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

function mayusculasNombre() {
  let nombre = document.getElementById('nom').value;
  nombre = nombre.split('');
  for (let i = 0; i < nombre.length; i++) {
    if (i == 0) {
      nombre[i] = nombre[i].toUpperCase();
    } else {
      nombre[i] = nombre[i].toLowerCase();
    }
  }
  nombre = nombre.join('');
  console.log(nombre);
  document.getElementById('nom').value = nombre;
}

function mayusculasApellidos() {
  let nombre = document.getElementById('apellidos').value;
  nombre = nombre.split('');
  for (let i = 0; i < nombre.length; i++) {
    if (i == 0) {
      nombre[i] = nombre[i].toUpperCase();
    } else {
      nombre[i] = nombre[i].toLowerCase();
    }
    nombre = nombre.join('');
    document.getElementById('apellidos').value = nombre;
  }
}

function comprobacionNombre() {
  let exp = /(?=.*\d)/;
  let nombre = document.getElementById('nom').value;
  if (exp.test(nombre) || nombre.length <= 0) {
    document.getElementById('nom').style.borderColor = 'red';
  } else if (nombre.length > 0) {
    document.getElementById('nom').style.borderColor = 'green';
  }
}

function comprobacionApellidos() {
  let exp = /(?=.*\d)/;
  let nombre = document.getElementById('apellidos').value;
  if (exp.test(nombre) || nombre.length <= 0) {
    document.getElementById('apellidos').style.borderColor = 'red';
  } else {
    document.getElementById('apellidos').style.borderColor = 'green';
  }
}

function validarContraseña() {
  let exp = /^(?=.*\d)(?=.*[.;,-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let con = document.getElementById('contraseña').value;
  let x = exp.test(con);
  if (!x) {
    // document.getElementById('reContraseña').style.background = 'red';
    document.getElementById('contraseña').style.borderColor = 'red';

    //Si coinciden se pone el fondo blanco y el borde verde
  } else {
    //document.getElementById('reContraseña').style.background = 'white';
    document.getElementById('contraseña').style.borderColor = 'green';
  }
}

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
