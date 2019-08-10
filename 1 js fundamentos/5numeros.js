const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //por ter tipagem fraca, considera número inteiro
console.log(Number.isInteger(peso2)); // isInteger = pergunta se o numero é inteiro, e dá uma resposta boolean

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1*peso1 + avaliacao2*peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // não transforma o número, só esconde as casas decimais
console.log(media.toString()); // transforma em string
console.log(media.toString(2)); // transforma em binário
console.log(typeof media);
console.log(typeof Number); // number com N maisculo é uma função