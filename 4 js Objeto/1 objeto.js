// coleção dinâmica de pares chave/valor

const produto = new Object()
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto ['marca do produto']
console.log(produto)


const carro = {
    modelo : 'a4',
    valor: 89000,
    proprietário:{
        nome:'Raul',
        idade:56,
        endereço: { // objeto dentro de objeto dentro de objeto 
            logradouro: 'angelo vial',
            numero: '237',
            cidade: 'sorocaba'
        }
    },
    condutores:[{  //objetos dentro de um array
        nome : 'ana',
        idade: 27
    }, {
        nome: ' julio',
        idade: 28
    }],
    calcularValorSeguro: () => console.log('valor do seguro')
}

console.log(carro)

// da pra deletar tudo nessa merda com o delete xxx.xx.xx