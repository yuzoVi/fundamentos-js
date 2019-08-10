const pai ={
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const ana =Object.create(pai)
ana.nome = 'ana'

const maria = Object.create(pai,{
    nome: {value:'maria', writable: false, enumerable: true}
})

console.log(ana)
console.log(maria)
console.log(ana.corCabelo, maria.corCabelo)

console.log(Object.keys(ana))
console.log(Object.keys(maria))

for(let key in maria){
    maria.hasOwnProperty(key)? console.log(`Propriedade propria :${key}`): 
    console.log(`Propriedade herdada: ${key}`) 
}