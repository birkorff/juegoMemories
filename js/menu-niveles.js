const escribeNiveles = () => {
  let menuNiveles = document.querySelector(".selecciona-nivel ul");
  niveles.forEach((elemento, indice) => {
    let controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    menuNiveles.appendChild(controlNivel);
  });
}

const cambiaNivel = () => {
  let nivel = parseInt(this.dataset.nivel);
  nivelActual = nivel;
  actualizaNivel();
  iniciar();
}

const muestraMenuNiveles = (evento) => {
  evento.stopPropagation();
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

const ocultaMenuNiveles = () => {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

const clickFueraDeMenu = (evento) => {
  if (evento.target.closest(".selecciona-nivel")) {
    return;
  }
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

const teclaEscCierraMenu = (evento) => {
  console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}
