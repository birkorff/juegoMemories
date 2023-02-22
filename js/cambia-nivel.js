const subeNivel = () => {
  nivelActual++;
}

const actualizaNivel = () => {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

const cargaNuevoNivel= () => {
  subeNivel();
  actualizaNivel();
  iniciar();
}
