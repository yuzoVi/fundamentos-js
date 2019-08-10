const produtos = [
    { nome: 'Notebook', preco: 2000, fragil: true},
    { nome: 'Ipad Pro', preco: 3000, fragil: true},
    { nome: 'Copo de vidro', preco: 18.75, fragil: true},
    { nome: 'Copo de plástico', preco: 10.99, fragil: false}
]

console.log(produtos.filter((prod) => prod.preco >1000)) 

console.log(produtos.filter(prod => prod.fragil === true && prod.preco <1000))

const copoDeVidro = (produtos.filter(prod => prod.fragil === true && prod.preco <1000))