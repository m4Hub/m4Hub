//OUTRA FORMA DE FAZER O CÓDIGO MAIS SIMPLES COM OPERADORES LÓGICOS

const idade = 67;
const temCarteirinha = false;
const ehAdulta = idade >= 18 && idade <= 60;
//Menor de 18 -> Menor de idade - paga meia
//Entre 18 - 60 -> Adulto - tem que ter carteirinha para pagar meia
//Maiores de 60 -> Idosos - paga meia

if (idade >= 18) {
  console.log("Pode seguir, pois é maior de idade")
} else {
  console.log("Barrado! Esta festa é para maiores")
}

if (idade < 18) {
  console.log('Menor de idade');
} else if (idade <= 60) {
  console.log("Pessoa adulta");
} else console.log('Pessoa idosa');

if (ehAdulta && temCarteirinha === false) {
  console.log("inteira");
} else {
  console.log("meia")
}








//PRIMEIRO CODIGO COM CONDICIONAIS ENCADEADAS
// const idade = 20;
// const temCarteirinha = true
// //Menor de 18 -> Menor de idade - paga meia
// //Entre 18 - 60 -> Adulto - tem que ter carteirinha para pagar meia
// //Maiores de 60 -> Idosos - paga meia
// //condicionais  - if (se) - else (se nao)
// if (idade >= 18) {
//   console.log("Pode seguir, pois é maior de idade")
// } else {
//   console.log("Barrado! Esta festa é para maiores")
// }

// if (idade < 18) {
//   console.log('Menor de idade');
// } else if (idade <= 60) {
//   console.log("Pessoa adulta");
// } else console.log('Pessoa idosa')

//----------------------------------------
// if (idade < 18) {
//   console.log("meia");
// } else if (idade <=60) {
//   if (temCarteirinha === true) {
//     console.log("meia");
//   } else {
//     console.log('inteira');
//   }
// } else {
//   console.log("meia")
// }