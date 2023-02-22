// Escribimos los niveles dinámicamente
escribeNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(elemento => {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".nivel").forEach(elemento => {
  elemento.addEventListener("click", cambiaNivel);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");
