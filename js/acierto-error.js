const acierto = (lasTarjetas) => {
  lasTarjetas.forEach(elemento => {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();
}

const error = (lasTarjetas) => {
  lasTarjetas.forEach(elemento => {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(() => {
    lasTarjetas.forEach(elemento => {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
