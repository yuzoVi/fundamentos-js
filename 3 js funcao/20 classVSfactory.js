class pessoa{
    constructor(nome){
        this.nome = nome
    }
    
    falar(){
        console.log("Oi, meu nome é " + this.nome)

    }
}

const victor = new pessoa('Victor')
victor.falar()


const criarPessoa = nome =>{
    return{
        falar: () =>console.log("Oi, meu nome é " + nome)
    }
}

const Jefferson = criarPessoa('Jefferson')
Jefferson.falar()