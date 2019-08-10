const escola = "coder";

console.log(escola.charAt(4));// volta o R pq tá na quinta posição
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // valor na tabela ascc
console.log(escola.indexOf('e')); // fala aonde ta a letra na palavra

console.log(escola.substring(1)); // começa doq você mandar
console.log(escola.substring(0,3)); // começa do que você mandar até um antes doq vc mandar

console.log('Escola '.concat(escola).concat("!")); // concatenar
console.log(escola.replace("e", '3')); // substituir

console.log('Ana,Maria,Pedro'.split(',')); 