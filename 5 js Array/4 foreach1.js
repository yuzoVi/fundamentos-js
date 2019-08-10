aprovados = ['ana', 'bruno','carlos','doulgas']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


aprovados.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})