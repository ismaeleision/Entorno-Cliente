/**
 * Capta el evento pasado por parametro y lo clasifica
 * el primer if es al pulsar enter y mueve la bala de la nave
 * el segundo es para los clicks del raton
 * el izquierdo mueve la nave y la bala a la izquierda
 * el derecho mueve la nave y la bala a la derecha
 */
function comprobarTeclas(evento) {
  var teclaPulsada = evento;
  //keycode==13 es el entenr
  if (teclaPulsada.keyCode == 13) {
    disparo.style.top = '0px';
    //mueve la bala hacia arriba y vuelve en un retardo de 1s
    setTimeout(function () {
      disparo.style.top = '200px';
    }, 1000);
  } else if (teclaPulsada.type == 'mouseup') {
    //si el click viene del boton 0 el izquierdo
    if (teclaPulsada.button == 0) {
      //le aumenta el margen izquierdo a la nave y bala y la variable pulsacionesizquierda
      nave.style.marginLeft = pulsacionesizquierda + '0px';
      disparo.style.marginLeft = pulsacionesizquierda + '0px';
      pulsacionesizquierda++;
      //si el click viene del boton 1 el derecho
    } else if (teclaPulsada.button == 2) {
      //le disminuye el margen izquierdo a la nave y bala y aumenta la variable pulsacionesderecha
      nave.style.marginLeft = -pulsacionesderecha + '0px';
      disparo.style.marginLeft = -pulsacionesderecha + '0px';
      pulsacionesderecha++;
    }
  }
}

var pulsacionesizquierda = 1;
var pulsacionesderecha = 1;

window.onload = function () {
  margenIzquierdoNave = 400;
  margenIzquierdoDisparo = 470;
  var nave = document.getElementById('nave');
  var disparo = document.getElementById('disparo');

  document.addEventListener('keydown', comprobarTeclas, false);
  document.addEventListener('mouseup', comprobarTeclas, false);
};
