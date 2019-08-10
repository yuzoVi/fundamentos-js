const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chaveVariadas = new Map([
    [function (){ }, 'função'],
    [{}, 'objeto'],
    [123, 'numero']
])

chaveVariadas.forEach((vl, chv)=>{
    console.log(chv, vl)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))

console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(456, 'a')
console.log(chaveVariadas)