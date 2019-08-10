console.log(7/0); // infinity
console.log("10.2"/2);   
// consegue dividir, por causa da tipagem fraca

console.log("Show!"*2); // Não vai funcionar NaN(not a number)
console.log(0.1+0.7);   // imprecisões com ponto flutuante 0.79999 (pra ser mais rápido)
//console.log((10).toString()); //não funciona
console.log((10.345).toFixed(2))