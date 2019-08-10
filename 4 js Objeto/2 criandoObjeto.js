// usando a notação literal
const obj1 = {}
console.log(obj1)

//usando objetc em js

const obj2 = new Object()
console.log(obj2)


//usando função construtora

function produto(nome,preco, desconto){     //'this' torna publico |o resto é privado
    this.nome = nome
    this.getPrecoComDescont = function(){
        return preco * (1-desconto)
    }
}
const notebook = produto('notebook', 1000, 0.25)
console.log(getPrecoComDescont(produto))


//usando função factory

function funcaoFactory (nome, cidade, emprego){
    return{
        nome,
        cidade,
        emprego,
        moraAonde : () => console.log('moro em ' + cidade)
    }
}

const victor = funcaoFactory('Victor', 'Sorocaba', 'programador')
victor.moraAonde()

//object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info)