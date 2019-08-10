//closure é o escopo criado quando um função é declarada
//esse escopo permite a função acessar e manipular variaveis externas a funçao

//Contexto léxico em ação

const x = 'global'

function fora(){
    const x = 'local'

    function dentro(){
        return x
    }
    return dentro()
}

console.log(fora())