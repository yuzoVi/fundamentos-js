const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 8.50 }'
]

//retornar um array apenas com os preços

retornarPreco = (json) => {
    return JSON.parse(json)
}

const objProdutos = carrinho.map(retornarPreco)



deletarNome = (e) => {
    return e.preco
}

const precos = objProdutos.map(deletarNome)
console.log(precos)