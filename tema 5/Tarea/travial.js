window.addEventListener('load', function () {
  let pregunta = document
    .getElementById('pregunta')
    .addEventListener('blur', validarPregunta);
});

function validarPregunta() {
  let exp = /(?=.*[1-9])/;
  let pregunta = document.getElementById('pregunta');
  if (!exp.test(pregunta.value) && pregunta.value != '') {
    pregunta.style.borderColor = 'green';
  } else {
    pregunta.style.borderColor = 'red';
    pregunta.focus();
  }
}
