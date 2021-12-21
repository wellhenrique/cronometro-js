const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarContagem);
pausar.addEventListener("click", pausarContagem);
pausar.addEventListener("dblclick", resetarTempo);
let i = 0;
let contador = "";

const contagem = () => {
  tempo.innerHTML = i++;
};

function iniciarContagem() {
  contador = setInterval(contagem, 1000);
  contador;
}

function pausarContagem() {
  clearInterval(contador);
}

function resetarTempo() {
  i = 0;
  contagem();
}
