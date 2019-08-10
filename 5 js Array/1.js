// array = objeto estrutado com indices

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlos', 'ana')

console.log(aprovados)

aprovados=  ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]  = 'paulo'
console.log(aprovados[3])   
aprovados.push('abia')
console.log(aprovados[4]) 
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordem ASCII

console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['ana', 'bruna', 'carlos']
aprovados.splice(1,1, 'bruno') //splice é um metodo flexivel, o primeiro indice significa a posição,
//o segundo quantos itens deseja excluir e posteriormente é possível adicionar +
console.log(aprovados)