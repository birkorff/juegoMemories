const iniciar = () => {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (!modoRelax) {
    iniciaCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

const reiniciar = () =>{
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

const iniciaJuegoNormal = () => {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

const iniciaJuegoRelax = () => {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}
