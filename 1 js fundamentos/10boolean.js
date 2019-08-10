let isAtivo =  false ;
console.log(isAtivo);

isAtivo = true ;
console.log(isAtivo);

isAtivo = 1
console.log(!isAtivo); // ! nega qualquer coisa !! fica verdadeiro

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])

console.log('os falsos....');
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!(''|| null || 0 || 'epa'))

let nome = "lucas"         // se nao tiver o nome ele vai usar "desocnhecido"
console.log(nome|| 'desconhecido') //