function iniciar() {
  let conexion = navigator.onLine;
  let plataforma = navigator.appVersion;
  //este metodo de navigator esta deprecated
  let java = navigator.javaEnabled();
  document.write(
    'Estas conectado ' +
      conexion +
      '. Tu plataforma es ' +
      plataforma +
      '. Estas usando java ' +
      java
  );
}
