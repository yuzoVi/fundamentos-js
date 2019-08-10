// object.preventExtensions = nao deixa adicionar 

const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: 'Promoção'
})

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)


//object.seal = nao deixa adiconar e nem excluir 
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
pessoa.nome = 'ana'
delete pessoa.idade
console.log(pessoa)


//object.freeze que trava tudo

const carro = Object.freeze({
    nome:'ferrari',
    modelo: 'f40',
    velMax: 324
})

carro.nome = "volvo"
carro.modelo = 'v40'
carro.velMax = '200'

console.log(carro)