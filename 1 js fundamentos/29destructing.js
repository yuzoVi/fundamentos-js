// novo recurso, intruduzido ES2015

const pessoa = {
    nome: 'Ana',
    idade: 12,
    endereço: {
        logradouro: ' rua abc',
        numero: 237
    }
}

const { nome, idade } = pessoa // tire do obj nome e idade /obj = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereço: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)