<?php
class VistaInicio
{
  public function __construct()
  {
    $this->html = "";
  }

  public function render()
  {
    $vistaC = new VistaCabecera();

    $this->html .= $vistaC->render();
    $this->html .=  '
    <div class="container">
      <div class="row">
        <div class="col-8">

        </div>
        <div class="col-4">
          <img src="./vistas/img/procesion.jpg" width="400px" height="300px">
        </div>
      </div>
    </div>';
    $vistaP = new VistaPie();
    $this->html .= $vistaP->render();
    echo $this->html;
  }
}
