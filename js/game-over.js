const gameOver = () => {
  clearInterval(cronometro);
  document.querySelector("#gameOver").classList.add("visible");
}

const timeOver = () =>{
  document.querySelector("#timeOver").classList.add("visible");
}
