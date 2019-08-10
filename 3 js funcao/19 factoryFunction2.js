function criarProduto(nome, preço){
    return{
        nome: nome,
        preço: preço,
        desconto : '5%'
    }

}

console.log(criarProduto('Boné', 40 + ' reais')) 


function criarPessoa(nome, idade){
    return{
        nome,
        idade,
        raça: 'Humano',
        falar: () => console.log("Oi, meu nome é " + nome)
    }
}


const victor = criarPessoa('Victor' , 20)
victor.falar()
console.log('\n')
console.log(victor)