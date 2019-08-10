//operador ...rest(juntar)/spread(espalhar)
//usar rest como parametro de função

const funcionario = {
    nome: 'maria',
    salario: 1200
}

const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal= ['jose', 'rafaela', ...grupoA]
console.log(grupoFinal)