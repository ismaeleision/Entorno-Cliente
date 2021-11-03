function tiempo() {
  var tiempo = new Date();
  document.write(
    tiempo.getHours() + ':' + tiempo.getMinutes() + ':' + tiempo.getSeconds()
  );
}
