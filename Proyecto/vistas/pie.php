<footer class="container-fluid p-3 mt-4 bg-dark text-secondary bg-gradient">
  <ul class="nav mb-2 justify-content-center mb-md-0">
    <li>@2022 Copyright Misco Jones S.A.</li>
  </ul>
  <div class="row fst-italic">
    <div class="col-1"></div>
    <div class="col-7">
      <dl>
        <dt>Contacto</dt>
        <dd>Telefono: 666-666-666</dd>
        <dd>Direccion: Av. Meldo Meloso</dd>
      </dl>
    </div>
    <div class="col-4">
      <dl>
        <dt>Dudas</dt>
        <dd>Estamos a su disposición</dd>
        <dd>Email: asdf@gmail.com</dd>
      </dl>
    </div>
  </div>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<!--AJAX-->
<!--
<script type="text/javascript">
  
  window.addEventListener("load", inicio);

  //Funcion inicio
  async function inicio() {

    //Boton Nueva Partida
    document.getElementById("inicio").addEventListener("click", async function(e) {
      const datos = new FormData();
      datos.append("accion", "inicio");
      const response = await fetch("enrutador.php", {
        method: "POST",
        body: datos
      });
      document.getElementById("contenedor").innerHTML = await response.text();
    });

    document.getElementById("servicios").addEventListener("click", async function(e) {
      const datos = new FormData();
      datos.append("accion", "servicios");
      const response = await fetch("enrutador.php", {
        method: "POST",
        body: datos
      });
      document.getElementById("contenedor").innerHTML = await response.text();
    });

    document.getElementById("muestrario").addEventListener("click", async function(e) {
      const datos = new FormData();
      datos.append("accion", "muestrario");
      const response = await fetch("enrutador.php", {
        method: "POST",
        body: datos
      });
      document.getElementById("contenedor").innerHTML = await response.text();
    });
  }
</script>
-->
</body>

</html>