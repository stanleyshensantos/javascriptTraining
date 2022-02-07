console.log(`Trabalhando com condicionais`);

const listadeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listadeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maio de idade")
//     listadeDestinos.splice(1, 1); //removendo item

// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado")
//     listadeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("comprador nao e maior de idade não posso vender");
// }



// console.log(listadeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
// const salario = 3300.0;
// if (salario < 2600.0) {
//     console.log("A sua alicota é de 15%");
//     console.log("Voce pode deduzir até R$ 350");
// } else if (salario < 3750.0) {
//     console.log("A sua alicota é de 22%");
//     console.log("Voce pode deduzir até R$ 636");
// }
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem")
    listadeDestinos.splice(1, 1); //removendo item

} else {
    console.log("comprador nao e maior de idade não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else {
    console.log("voce não pode embarcar");
}
console.log(listadeDestinos);