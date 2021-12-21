// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor

//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return 'bibibi'
//   }
// }

// const honda = Object.create(carro)
// honda.init('Honda')
// const honda = Object.create(carro).init('Honda')
// console.log(honda)

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou'
//   },
//   buzinar() {
//     return 'buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro

// const moto = {
//   rodas: 2
// }
// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4
//     }
//   }
// })

// const carro = {
//   marca: 'Honda',
//   ano: 2003
// }

// const moto = {
//   marca: 'BMW',
//   ano: 2003
// }
// console.log(Object.entries(carro)) // cria um array com key e value do objeto
// // console.log(Object.is(moto, moto)) //compara se ambos sao iguais
// Object.freeze(moto) //nao deixa mudar o objto
// moto.marca = 'Honda' // ==> invalido
// Object.seal(moto) // permite alterar algo mas n deixa add outra propriedade
// moto.pneu = 'Michelin' //==> invalido
// Object.preventExtensions(moto) //previne a extensao de mudanca
// moto.pneu = 'Michelin' //==> invalido

// const frutas = ['Banana', 'Queijo', 'Leite']
// console.log(Object.prototype.toString.call(frutas))

// function isDado(obj) {
//   return Object.prototype.toString.call(obj)
// }

// console.log(isDado('OBa'))

// const quadrado = {
//   lados: 4
// }

// Object.freeze(quadrado)
// quadrado.lados = 3
// quadrado.rodas = 'michelin'

// console.log(Object.getOwnPropertyNames(Array.prototype))
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
