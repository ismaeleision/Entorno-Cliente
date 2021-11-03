function tiempo() {
  //introduce en la varitable los datos del tiempo actual
  var tiempo = new Date();
  //escribe la hora los minutos y los segundos
  document.write(
    tiempo.getHours() + ':' + tiempo.getMinutes() + ':' + tiempo.getSeconds()
  );
}
