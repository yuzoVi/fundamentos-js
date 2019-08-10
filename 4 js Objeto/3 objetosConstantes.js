// pessoa -> 123(endereço de memoria) ->{.....}
const pessoa = {nome: 'joão'}
pessoa.nome = ' patricia'
console.log(pessoa)

// pessoa - 456 (endereço de memoria) -> {.....}

//pessoa = {nome: 'lucas'} - vai dar erro porque tenta mudar o endereço de memória

Object.freeze(pessoa) // trava o objeto, nao permitindo NENHUMA mudança nele

pessoa.nome = 'Maria'
pessoa.ed = 'rua abc'
delete pessoa.nome

console.log(pessoa)