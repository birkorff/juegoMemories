const barajaTarjetas = (lasTarjetas) => {
  var resultado;
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  resultado = totalTarjetas.sort(() => {
    return 0.5 - Math.random();
  });
  return resultado;
}

const reparteTarjetas = (lasTarjetas) => {
  let mesa = document.querySelector("#mesa");
  let tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  mesa.innerHTML = "";

  tarjetasBarajadas.map(elemento => {
    let tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}
