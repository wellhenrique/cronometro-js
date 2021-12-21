const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarContagem);
pausar.addEventListener("click", pausarContagem);
pausar.addEventListener("dblclick", resetarTempo);
let i = 0;
let contador = "";
tempo = 0;

function iniciarContagem() {
  contador = setInterval(() => {
    tempo.innerHTML = i++;
  }, 1000);
  iniciar.setAttribute("disabled", "");
}

function pausarContagem() {
  clearInterval(contador);
  iniciar.removeAttribute("disabled", "");
}

function resetarTempo() {
  i = 0;
  tempo.innerHTML = 0;
  contagem();
}
