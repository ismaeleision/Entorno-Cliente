window.onload = function () {
  //Llama a la funcion de comprobar la contraseña con la repetir contraseña
  let repiteContraseña = document.getElementById('repite_contraseña');
  repiteContraseña = document.addEventListener('keyup', comprobarContraseña);

  //Cuando se le pierde el foco al email comprueba si tiene @ y un punto
  let email = document.getElementById('email');
  email = document.addEventListener('blur', comprobarEmail);

  let enviar = document.getElementById('enviar');
  enviar = document.addEventListener('click', comprobarCampos);
};

/**
 * Tiene que coger lo escrito en cada input y salir en rojo hasta que no coincida
 */
function comprobarContraseña() {}

/**
 * Al salir del foco va a comprobar si tiene un @ y un punto
 * si no salta en rojo
 */
function comprobarEmail() {}

/**
 * Tiene que comprobar que ningun campo esta vacio y todos son validos
 * en caso afirmativo sale un emergente
 * en caso negativo te pone el foco en el/los campo/s que requieran correccion
 */
function comprobarCampos() {}
