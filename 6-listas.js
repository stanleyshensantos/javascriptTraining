console.log(`Trabalhando com listas`);
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;

const listadeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listadeDestinos.push(`Curitiba`); //adicionando elementos na minha lista.
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listadeDestinos);

listadeDestinos.splice(1,1);
console.log(listadeDestinos);
console.log(listadeDestinos[1]);