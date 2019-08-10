const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' //not writable
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) //enumerable

//object.assign (ECMAscript2015)

const destino = { a: 1 }
const x = { b: 2 }
const z = { c: 3, a: 4 }

Object.assign(destino, x, z)
console.log(destino)


destino.c = 10000
console.log(destino)
delete destino.c
console.log(destino)