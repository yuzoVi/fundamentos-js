//par nome/valor
const saudacao = 'ola'; // contexto lexico 1

function exec() {
    const saudacao = "falaaa" //contexto lexico 2
    return saudacao;
}

//objetos são grupos alinhados de chaves/valor
const cliente = {
    nome: ' Pedro',
    idade: 32,
    endereço: {
        logradouro: 'rua x',
        numero: 237
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

